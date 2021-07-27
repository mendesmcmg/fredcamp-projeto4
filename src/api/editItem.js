import db from "../utils/firebase";

const editItem = (key, title, text, date, funcCallBack) => {
  let newPostData = { title, text, date };
  let updates = {};
  updates[`/all_posts/` + key] = newPostData;

  db.ref().update(updates).then(funcCallBack);
};

export default editItem;
