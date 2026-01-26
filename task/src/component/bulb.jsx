import React, { useState } from "react";
import "./Bulb.css";

function Bulb() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="container">
      <h1> Bulb ON / OFF</h1>

      <img
        src={isOn ? "/on.png" : "/off.webp"}
        alt="Bulb"
        className={`bulb ${isOn ? "on" : ""}`}
      />

      <div className="btn-group">
        <button className="btn on-btn" onClick={() => setIsOn(true)}>
          ON
        </button>

        <button className="btn off-btn" onClick={() => setIsOn(false)}>
          OFF
        </button>
      </div>
    </div>
  );
}

export default Bulb;
