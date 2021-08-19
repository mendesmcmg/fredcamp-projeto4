import { useState } from "react";
import AppContext from "./context";
import getAllItems from "../api/getAllItems";

const defaultState = {
  posts: [],
  updateList: () => {},
};

const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState(defaultState.posts);

  const updateList = () => {
    getAllItems((allPosts) => setPosts(allPosts, []));
  };

  return (
    <AppContext.Provider value={{ posts, updateList }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
