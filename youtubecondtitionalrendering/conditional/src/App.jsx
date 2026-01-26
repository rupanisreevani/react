import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const handleButton = () => {
    setShow(!show); // toggle
  };

  return (
    <div>
      <button onClick={handleButton}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <p>This is a secret message</p>}
    </div>
  );
}

export default App;
