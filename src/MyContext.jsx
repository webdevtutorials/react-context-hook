import { useState, useMemo, createContext, useContext } from "react";

const MyContext = createContext(undefined);

function MyProvider({ children }) {
  const [data, setData] = useState("No data");
  const value = useMemo(() => ({ data, setData }), [data, setData]);

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

function useMyContext() {
  const context = useContext(MyContext);
  if (context === undefined)
    throw new Error("useMyContext must be used within MyProvider");

  return context;
}

export { MyContext, useMyContext, MyProvider };
