import { Button, Container, TextField } from "@material-ui/core";
import React, { Component } from "react";
import createItem from "../api/createItem";
import editItem from "../api/editItem";

class ItemsForm extends Component {
  state = {
    title: "",
    text: "",
    titleValid: true,
    textValid: true,
    exists: false,
  };

  componentDidMount() {
    const { post } = this.props;
    if (post) {
      const { title, text } = post;
      this.setState({ title, text, exists: true });
    }
  }

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

  handleSave = () => {
    const { key, date } = this.props.post;
    const { title, text } = this.state;
    editItem(key, title, text, date, () => {
      this.props.handleClose();
      this.props.updateList();
    });
    this.props.updateList();
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

  createPost = () => {
    const { title, text } = this.state;

    if (this.checkValid() === true) {
      createItem(title, text, () => {
        this.setState({ title: "", text: "" });
        this.props.updateList();
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { exists } = this.state;
    if (exists) {
      this.handleSave();
    } else {
      this.createPost();
    }
  };

  render() {
    const { title, text, titleValid, textValid, exists } = this.state;

    return (
      <Container maxWidth="sm">
        <form onSubmit={this.handleSubmit}>
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
            onClick={this.handleSubmit}
            type="submit"
          >
            {exists ? "save" : "Create Post"}
          </Button>
        </form>
      </Container>
    );
  }
}

export default ItemsForm;
