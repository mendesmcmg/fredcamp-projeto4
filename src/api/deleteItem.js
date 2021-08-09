import db from "../utils/firebase";

const deleteItem = (key, funcCalback) => {
  db.ref("all_posts/" + key).remove().then(funcCalback);
};

export default deleteItem;
