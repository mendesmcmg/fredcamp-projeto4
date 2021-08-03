import { Container } from "@material-ui/core";
import { Component } from "react";
import getAllItems from "../api/getAllItems";
import ItemsCard from "./ItemsCard";

class ItemsList extends Component {

  render() {
    const { posts, updateList } = this.props;
    // const posts = this.state.posts;

    return (
      <Container maxWidth="sm">
        <div>
          {posts.map((post) => (
            <ItemsCard key={post.key} post={post} updateList={updateList}/>
          ))}
        </div>
      </Container>
    );
  }
}

export default ItemsList;
