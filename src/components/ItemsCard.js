import { Button, Card, CardContent } from "@material-ui/core";
import { useContext } from "react";
import deleteItem from "../api/deleteItem";
import AppContext from "../context/context";
import EditModal from "./EditModal/EditModal";

const ItemsCard = ({ post }) => {
  const { key, title, text, date } = post;
  const { updateList } = useContext(AppContext);

  return (
    <Card variant="outlined" style={{ marginBottom: 8 }}>
      <CardContent>
        <p>{date}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            deleteItem(key, () => updateList());
          }}
        >
          Delete
        </Button>
        <EditModal post={post}>
          Editar
        </EditModal>
      </CardContent>
    </Card>
  );
};
export default ItemsCard;
