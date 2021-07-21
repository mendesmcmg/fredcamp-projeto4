import React, { Component } from "react";
import db from "../utils/firebase";

class ItemsForm extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      title: "",
      text: "",
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

  createPost(e) {
    e.preventDefault();
    const { title, text } = this.state;
    const date = Date.now();

    db.ref(`all_posts/`)
      .push({
        title,
        text,
        date,
      })
      .then((_) => {
        console.log(db.ref(`all_posts`));
        this.setState({ title: "", text: "" });
      });
  }

  render() {
    return (
      <>
        <form onSubmit={this.createPost}>
          <input
            placeholder="title"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <input
            placeholder="text"
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <button onClick={this.createPost}>Create Post</button>
        </form>
      </>
    );
  }
}

export default ItemsForm;
