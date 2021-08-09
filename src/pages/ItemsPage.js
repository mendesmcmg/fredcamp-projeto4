import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import ItemsForm from "../components/ItemsForm";
import ItemsList from "../components/ItemsList";
import AppProvider from "../context/provider";

function ItemsPage() {
  return (
    <>
      <AppProvider>
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
      </AppProvider>
    </>
  );
}

export default ItemsPage;
