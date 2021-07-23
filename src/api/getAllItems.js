import db from "../utils/firebase";

const getAllItems = (funcCallback) => {
  db.ref("all_posts/").on("value", (snapshot) => {
    let allPosts = [];
    snapshot.forEach((snap) => {
      let value = snap.val();
      value.key = snap.key;
      allPosts.push(value);
    });
    funcCallback(allPosts);
  });
};

export default getAllItems;
