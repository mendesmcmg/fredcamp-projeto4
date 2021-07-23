import { Container } from "@material-ui/core";
import { Component } from "react";
import db from "../utils/firebase";
import ItemsCard from "./ItemsCard";

class ItemsList extends Component {
  state = {
    posts: [],
    title: "",
    text: "",
  };

  componentDidMount() {
    db.ref("all_posts/").on("value", (snapshot) => {
      let allPosts = [];
      snapshot.forEach((snap) => {
        let value = snap.val();
        value.key = snap.key;
        allPosts.push(value);
      });
      this.setState({ posts: allPosts });
    });
  }

  render() {
    const { posts } = this.state;
    // const posts = this.state.posts;

    return (
      <Container maxWidth="sm">
        <div>
          {posts.map((post) => (
            <ItemsCard key={post.key} post={post} />
          ))}
        </div>
      </Container>
    );
  }
}

export default ItemsList;
