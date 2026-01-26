import { useEffect } from "react";

export default function ComponentLifeCycle() {
  useEffect(() => {
    console.log("Mounting phase - component mounted");
  }, []);

  return (
    <>
      <h1>Mounting phase</h1>
    </>
  );
}
