import { Container } from "@material-ui/core";
import { useContext, useEffect } from "react";
import AppContext from "../context/context";
import ItemsCard from "./ItemsCard";

function ItemsList() {
  const { posts, updateList } = useContext(AppContext);
  useEffect(() => updateList(), [updateList]);

  return (
    <Container maxWidth="sm">
      <div>
        {posts.map((post) => (
          <ItemsCard key={post.key} post={post} />
        ))}
      </div>
    </Container>
  );
}

export default ItemsList;
