import { IconButton, Modal, Fade, Backdrop } from "@material-ui/core";
import { useState } from "react";
import EditIcon from '@material-ui/icons/Edit';
import style from "./style";
import ItemsForm from "../ItemsForm";

function EditModal({ post }) {
  const [open, setOpen] = useState(false);
  const classes = style();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        type="button"
        aria-label="edit"
        style={{ float: "right" }}
        onClick={handleOpen}
      >
        <EditIcon />
        <span style={{ fontSize: 22, marginLeft: 5 }}>Edit</span>
      </IconButton>

      <Modal
        className={classes.modal}
        aria-labelledby="edit-modal"
        aria-describedby="modal-for-post-editing"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form>
              <h1>Editar post</h1>
              <ItemsForm post={post} handleClose={handleClose}/>
            </form>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default EditModal;
