import { Button, Container, TextField } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import createItem from "../api/createItem";
import editItem from "../api/editItem";
import AppContext from "../context/context";

function ItemsForm({ post, handleClose }) {
  const [objState, setObjState] = useState({
    title: "",
    text: "",
    exists: false,
  });
  const [titleValid, setTitleValid] = useState(true);
  const [textValid, setTextValid] = useState(true);

  const { updateList } = useContext(AppContext);

  const { title, text, exists } = objState;

  useEffect(() => {
    if (post) {
      const { title, text } = post;
      setObjState({ title, text, exists: true });
    }
  }, [post]);

  const handleTitleChange = (e) => {
    setObjState({
      ...objState,
      title: e.target.value,
    });
  };

  const handleTextChange = (e) => {
    setObjState({
      ...objState,
      text: e.target.value,
    });
  };

  const handleSave = () => {
    const { key, date } = post;
    const { title, text } = objState;

    editItem(key, title, text, date, () => {
      handleClose();
      updateList();
    });
  };

  const checkValid = () => {
    const { title, text } = objState;
    if (title === "") {
      setTitleValid(false);
    } else {
      setTitleValid(true);
    }
    if (text === "") {
      setTextValid(false);
    } else {
      setTextValid(true);
    }

    return title !== "" && text !== "";
  };

  const createPost = () => {
    const { title, text } = objState;

    if (checkValid() === true) {
      createItem(title, text, () => {
        setObjState({ ...objState, title: "", text: "" });
        updateList();
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { exists } = objState;
    if (exists) {
      handleSave();
    } else {
      createPost();
    }
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <TextField
          error={!titleValid}
          helperText={!titleValid && "Title required"}
          fullWidth
          style={{ marginBottom: 8 }}
          label="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <TextField
          error={!textValid}
          helperText={!textValid && "Text required"}
          fullWidth
          label="Text"
          style={{ marginBottom: 8 }}
          value={text}
          onChange={handleTextChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          type="submit"
        >
          {exists ? "save" : "Create Post"}
        </Button>
      </form>
    </Container>
  );
}

export default ItemsForm;
