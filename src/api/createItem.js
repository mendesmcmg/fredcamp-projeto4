import db from "../utils/firebase";

const createItem = (title, text, funcCallback) => {
  const date = new Date().toLocaleString("pt-br");

  db.ref(`all_posts/`)
    .push({
      title,
      text,
      date,
    })
    .then(funcCallback);
};

export default createItem;
