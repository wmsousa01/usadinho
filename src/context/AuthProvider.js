import { useState } from "react";
import AppContext from "./AuthContext.js";

const defaultToken = null;

const AppProvider = ({ children }) => {
  const [token, setToken] = useState(defaultToken);
  const [userName, setUserName] = useState('')

  return (
    <AppContext.Provider value={{ token, setToken, userName, setUserName }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;