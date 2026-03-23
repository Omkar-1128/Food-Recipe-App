import { useState } from "react";
import { AppContext } from "./AppContext";

function AppProvider({ children }) {

  const [data, setData] = useState(null);
  const [Loading, setLoading] = useState(false);

  return (
    <AppContext.Provider value={{ data, setData, Loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;