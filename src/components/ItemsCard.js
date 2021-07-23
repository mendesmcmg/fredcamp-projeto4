import { Button, Card, CardContent } from "@material-ui/core";
import db from "../utils/firebase";

const ItemsCard = ({ post }) => {
  const { key, title, text, date } = post;

  const deleteItem = () => {
    db.ref("all_posts/" + key).remove();
  };

  return (
    <Card variant="outlined" style={{ marginBottom: 8 }}>
      <CardContent>
        <p>{date}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        <Button variant="outlined" color="secondary" onClick={deleteItem}>
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};
export default ItemsCard;
