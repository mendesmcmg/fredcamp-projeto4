import {
  Button,
  Container,
  IconButton,
  SvgIcon,
  TextField,
} from "@material-ui/core";
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
    const post = this.props.post;
    if (post) {
      this.setState({ title: post.title, text: post.text, exists: true });
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
    const {key, date} = this.props.post
    const {title, text} = this.state
    editItem(key, title, text, date);
    console.log(key, title, text, date)
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
    const { title, text, titleValid, textValid, exists } = this.state;

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
          {exists ? (
            <IconButton
              aria-label="save-edit"
              style={{ float: "right" }}
              onClick={this.handleSave}
            >
              <SvgIcon>
                <path
                  fill="currentColor"
                  d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"
                />
              </SvgIcon>
              <span style={{ fontSize: 22, marginLeft: 5 }}>Save</span>
            </IconButton>
          ) : null}
        </form>
      </Container>
    );
  }
}

export default ItemsForm;
