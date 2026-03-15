import { useState, useMemo, createContext, useContext } from "react";

const MyContext = createContext(undefined);

export function MyProvider({ children }) {
  const [data, setData] = useState("No data");
  const value = useMemo(() => ({ data, setData }), [data, setData]);

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export function useData() {
  const context = useContext(MyContext);
  if (context === undefined)
    throw new Error("useData must be used within MyProvider");

  return context;
}
