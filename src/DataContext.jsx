import { useState, useMemo, createContext, useContext } from "react";

const DataContext = createContext(undefined);

export function DataProvider({ children }) {
  const [data, setData] = useState("No data");
  const value = useMemo(() => ({ data, setData }), [data, setData]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("useData must be used within DataProvider");

  return context;
}
