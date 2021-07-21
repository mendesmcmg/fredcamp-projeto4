import { Component } from "react";
import db from "../utils/firebase";
import ItemsCard from "./ItemsCard";

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
          {this.state.posts.map((post) =>  (
              <ItemsCard key={post.date} title={post.title} text={post.text} date={post.date}/>
            )
          )}
        </div>
      </>
    );
  }
}

export default ItemsList;
