import { AppBar, Toolbar } from "@material-ui/core";
import ItemsForm from "./ItemsForm";
import ItemsList from "./ItemsList";

function ItemsPage() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <h1>Post List</h1>
        </Toolbar>
      </AppBar>
      <br/><br/>
      <ItemsForm />
      <ItemsList />
    </>
  );
}

export default ItemsPage;
