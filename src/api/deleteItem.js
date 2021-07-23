import db from "../utils/firebase";

const deleteItem = (key) => {
  db.ref("all_posts/" + key).remove();
};

export default deleteItem;
