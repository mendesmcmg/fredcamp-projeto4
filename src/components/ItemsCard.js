import { Button, Card, CardContent } from "@material-ui/core";
import deleteItem from "../api/deleteItem";
import EditButton from "./EditButton";

const ItemsCard = ({ post }) => {
  const { key, title, text, date } = post;

  return (
    <Card variant="outlined" style={{ marginBottom: 8 }}>
      <CardContent>
        <p>{date}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => deleteItem(key)}
        >
          Delete
        </Button>
        <EditButton>Editar</EditButton>
      </CardContent>
    </Card>
  );
};
export default ItemsCard;
