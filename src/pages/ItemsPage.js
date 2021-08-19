import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import ItemsForm from "../components/ItemsForm";
import ItemsList from "../components/ItemsList";

function ItemsPage() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Post List</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <br />
        <br />
        <ItemsForm />
        <br />
        <ItemsList />
      </Container>
    </>
  );
}

export default ItemsPage;
