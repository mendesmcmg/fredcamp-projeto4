import { Component } from "react";
import db from "../utils/firebase";

class ItemsList extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      title: "",
      text: "",
    };
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

  render() {
    return (
      <>
        <div>
          {this.state.posts.map((post) => {
            return (
              <div key={post.date}>
                <p>{post.date}</p>
                <h1>{post.title}</h1>
                <p>{post.text}</p>
                <button onClick={console.log("porra")}>Delete</button>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default ItemsList;
