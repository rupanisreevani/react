import React, { useState } from "react";
import "./Greeting.css";

function Greeting() {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  // Event Handler
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // Event Binding
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div className="greet-container">
      <h1> Welcome App</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />

      <button onClick={handleShow}>Show Greeting</button>

      {show && <h2>Hello, {name} </h2>}
    </div>
  );
}

export default Greeting;
