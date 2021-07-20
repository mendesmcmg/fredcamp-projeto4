import "./App.css";
import React, { Component } from "react";
import db from "./utils/firebase";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      title: "",
      text: "",
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  componentDidMount() {
    db.ref("all_posts/").on("value", (snapshot) => {
      let allPosts = [];
      snapshot.forEach((snap) => {
        allPosts.push(snap.val());
      });
      this.setState({ posts: allPosts });
    });
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  createPost(e) {
    e.preventDefault()
    const { title, text } = this.state;
    const date = Date.now();

    db.ref(`all_posts/`)
      .push({
        title,
        text,
        date,
      })
      .then((_) => {
        console.log(db.ref(`all_posts`))
        this.setState({ title: "", text: "" });
      });
  }


  render() {
    return (
      <>
        <form onSubmit={this.createPost}>
          <input
            placeholder="title"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <input
            placeholder="text"
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <button onClick={this.createPost}>Create Post</button>
        </form>
        <div>
          {this.state.posts.map((post) => {
            return (
              <div key={post.date}>
                <p>{post.date}</p>
                <h1>{post.title}</h1>
                <p>{post.text}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default App;
// function App() {
//   const [title, setTitle] = useState("");
//   const [text, setText] = useState("");

//   function sendPost(title, text) {
//     firebase.database().ref('posts/').set({
//       title: title,
//       text: text
//     });
//   }

//   return (
//   );
// }
