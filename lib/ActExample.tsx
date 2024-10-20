import { useEffect, useState } from "react";

export const ActExample = () => {
  const [thing, setThing] = useState();

  useEffect(() => {
    setThing("Hello World");
  });
  return <div>{thing}</div>;
};
