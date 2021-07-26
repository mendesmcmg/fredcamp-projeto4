import db from "../utils/firebase";

const editItem = (key, title, text, date) => {
  let newPostData = {title: title, text: text, date: date}
  let updates = {};
  updates[`/all_posts/` + key] = newPostData

  db.ref()
    .update(updates)
};

export default editItem;
