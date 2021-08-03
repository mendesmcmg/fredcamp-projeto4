import { Container } from "@material-ui/core";
import { Component } from "react";
import getAllItems from "../api/getAllItems";
import ItemsCard from "./ItemsCard";

class ItemsList extends Component {
  state = {
    posts: [],
    title: "",
    text: "",
  };

  updateList = () => {
    getAllItems((allPosts) => this.setState({ posts: allPosts }));
  }

  componentDidMount() {
    this.updateList();
  }

  render() {
    const { posts } = this.state;
    // const posts = this.state.posts;

    return (
      <Container maxWidth="sm">
        <div>
          {posts.map((post) => (
            <ItemsCard key={post.key} post={post} updateList={this.updateList}/>
          ))}
        </div>
      </Container>
    );
  }
}

export default ItemsList;
