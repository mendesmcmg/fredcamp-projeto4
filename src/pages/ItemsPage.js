import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import { Component } from "react";
import getAllItems from "../api/getAllItems";
import ItemsForm from "../components/ItemsForm";
import ItemsList from "../components/ItemsList";
import AppProvider from "../context/provider";

class ItemsPage extends Component {
  state = {
    posts: [],
  };

  updateList = () => {
    getAllItems((allPosts) => this.setState({ posts: allPosts }));
  };

  componentDidMount() {
    this.updateList();
  }

  render() {
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5">Post List</Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
          <br />
          <br />
          <ItemsForm updateList={this.updateList} />
          <br />
          <ItemsList updateList={this.updateList} posts={this.state.posts}/>
        </Container>
      </>
    );
  }
}

export default ItemsPage;
