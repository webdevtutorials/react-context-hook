import { useEffect } from "react";
import { useMyContext } from "./MyContext";

export default function MyConsumer() {
  const { data, setData } = useMyContext();

  useEffect(() => {
    setData("My data");
  }, []);

  return (
    <>
      <h2>My Consumer</h2>
      <p>{data}</p>
    </>
  );
}
