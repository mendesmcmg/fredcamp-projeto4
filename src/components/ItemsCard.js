import { Button, Card, CardContent, makeStyles, Typography } from "@material-ui/core";

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
        <Button variant="outlined" color="secondary" onClick={deleteItem}>Delete</Button>
      </CardContent>
    </Card>
  );
}
export default ItemsCard;
