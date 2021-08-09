const { createContext } = require("react");

const AppContext = createContext({
  title: "",
  text: "",
  posts: [],
  date: null,
});

export default AppContext;
