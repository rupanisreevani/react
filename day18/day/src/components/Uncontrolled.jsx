import { useRef } from "react";

export function Uncontrolled() {
  const inputRef = useRef(null);

  const handleData = () => {
    alert(`Hello, I'm from ${inputRef.current.value}`);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your place"
        ref={inputRef}
      />
      <br /><br />
      <button onClick={handleData}>Submit</button>
    </>
  );
}
