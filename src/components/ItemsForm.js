import { Button, Container, TextField } from "@material-ui/core";
import React, { Component } from "react";
import db from "../utils/firebase";

class ItemsForm extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      title: "",
      text: "",
      titleValid: true,
      textValid: true,
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.createPost = this.createPost.bind(this);
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

  checkValid() {
    if (!this.state.title || this.state.title === "") {
      this.setState({ titleValid: false });
      return false;
    } else {
      this.setState({ titleValid: true });
      if (!this.state.text || this.state.text === "") {
        this.setState({ textValid: false });
        return false;
      } else {
        this.setState({ textValid: true });
        return true;
      }
    }
  }

  createPost(e) {
    e.preventDefault();
    const { title, text } = this.state;
    const date = new Date().toLocaleString("pt-br");

    this.checkValid();

    if (this.checkValid() === true) {
      db.ref(`all_posts/`)
        .push({
          title,
          text,
          date,
        })
        .then((_) => {
          this.setState({ title: "", text: "" });
        });
    }
  }

  render() {
    let titleField;
    let textField;
    if (this.state.titleValid) {
      titleField = (
        <TextField
          fullWidth
          margin="2rem"
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
          margin="2rem"
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
