import { useState } from "react";
import AppContext from "./context";

const defaultState = {
  title: "1",
  text: "2",
  posts: [],
  date: Date.now(),
};

const AppProvider = ({ children }) => {
  const { title, text } = useState(defaultState);

  return (
    <AppContext.Provider value={{ title, text }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
