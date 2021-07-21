import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";

function deleteItem() {
  console.log("ui");
}

function ItemsCard({ key, title, text, date }) {
  return (
    <Card variant="outlined" key={key}>
      <CardContent>
        <p>{date}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        <button onClick={deleteItem}>Delete</button>
      </CardContent>
    </Card>
  );
}
export default ItemsCard;
