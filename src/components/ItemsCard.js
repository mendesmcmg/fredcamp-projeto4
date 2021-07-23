import { Button, Card, CardContent } from "@material-ui/core";
import db from "../utils/firebase";

const ItemsCard = ({ id, title, text, date }) => {
  const deleteItem = (id) => {
    db.ref("all_posts/" + id).remove();
  };

  return (
    <Card variant="outlined" style={{ marginBottom: 8 }}>
      <CardContent>
        <p>{date}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => deleteItem(id)}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};
export default ItemsCard;
