import { useEffect, useState } from "react";

export function UpdatingPhase() {
  const [count, setCount] = useState(0); 

  // Updating phase
  useEffect(() => {
    console.log("count updated :", count);
  }, [count]); // runs whenever count changes
  // Unmounting phase
  useEffect(()=>{
    return()=>{
        console.log("Unmounting phase - 3")
    }
  },[])

  return (
    <>
      <h2>Updating Phase - Phase 2</h2>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
