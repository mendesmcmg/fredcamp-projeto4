import { createContext } from "react";

const AppContext = createContext({
  posts: [],
  updateList: () => {},
});

export default AppContext;
