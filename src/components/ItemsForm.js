import { Button, Container, TextField } from "@material-ui/core";
import React, { Component } from "react";
import db from "../utils/firebase";

class ItemsForm extends Component {
  state = {
    posts: [],
    title: "",
    text: "",
    titleValid: true,
    textValid: true,
  };

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  checkValid = () => {
    const { title, text } = this.state;
    if (title === "") {
      this.setState({ titleValid: false });
    } else {
      this.setState({ titleValid: true });
    }
    if (text === "") {
      this.setState({ textValid: false });
    } else {
      this.setState({ textValid: true });
    }

    return title !== "" && text !== "";
  };

  createPost = (e) => {
    e.preventDefault();
    const { title, text } = this.state;
    const date = new Date().toLocaleString("pt-br");

    if (this.checkValid() === true) {
      db.ref(`all_posts/`)
        .push({
          title,
          text,
          date,
        })
        .then(() => {
          this.setState({ title: "", text: "" });
        });
    }
  };

  render() {
    let titleField;
    let textField;
    if (this.state.titleValid) {
      titleField = (
        <TextField
          fullWidth
          style={{ marginBottom: 8 }}
          label="Title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
      );
    } else {
      titleField = (
        <TextField
          error
          helperText="Title required"
          fullWidth
          style={{ marginBottom: 8 }}
          label="Title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
      );
    }

    if (this.state.textValid) {
      textField = (
        <TextField
          fullWidth
          label="Text"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
      );
    } else {
      textField = (
        <TextField
          error
          helperText="Text required"
          fullWidth
          label="Text"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
      );
    }
    return (
      <Container maxWidth="sm">
        <form onSubmit={this.createPost}>
          {titleField}
          <br />
          {textField}
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={this.createPost}
            type="submit"
          >
            Create Post
          </Button>
        </form>
      </Container>
    );
  }
}

export default ItemsForm;
