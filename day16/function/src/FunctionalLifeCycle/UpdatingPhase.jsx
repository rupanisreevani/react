import { useEffect, useState } from "react";


function UpdatingPhase() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count updated:", count);
  }, [count]);

  return (
    <>
      <h1>Updating Phase</h1>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

export default UpdatingPhase;
