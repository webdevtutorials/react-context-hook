import { useEffect } from "react";
import { useData } from "./MyContext";

export default function MyComponent() {
  const { data, setData } = useData();

  useEffect(() => {
    setData("My data");
  }, []);

  return (
    <>
      <h2>My Component</h2>
      <p>{data}</p>
    </>
  );
}
