import { useState } from "react";
import "./Toggle.css"
export function Toggle() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      <h1>{loggedIn ? "Welcome to page" : "Please login"}</h1>

      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Logout" : "Login"}
      </button>
    </>
  );
}
