import { Button, Container, TextField } from "@material-ui/core";
import React, { Component } from "react";
import createItem from "../api/createItem";

class ItemsForm extends Component {
  state = {
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

    if (this.checkValid() === true) {
      createItem(title, text, () => this.setState({ title: "", text: "" }));
    }
  };

  render() {
    const { title, text, titleValid, textValid } = this.state;

    return (
      <Container maxWidth="sm">
        <form onSubmit={this.createPost}>
          <TextField
            error={!titleValid}
            helperText={!titleValid && "Title required"}
            fullWidth
            style={{ marginBottom: 8 }}
            label="Title"
            value={title}
            onChange={this.handleTitleChange}
          />
          <TextField
            error={!textValid}
            helperText={!textValid && "Text required"}
            fullWidth
            label="Text"
            style={{ marginBottom: 8 }}
            value={text}
            onChange={this.handleTextChange}
          />
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
