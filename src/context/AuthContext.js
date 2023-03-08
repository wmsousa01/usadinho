import { createContext } from "react";

const AppContext = createContext({
  token: null,
  userName: ''
});

export default AppContext;
