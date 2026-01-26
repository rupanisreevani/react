import { useState } from "react"

export function Eventhandling(){
    const[name,setname]=useState("")
    const handlename=(event)=>{
        setname(event.target.value);
    }
    return(
        <>
        {/* <button onClick={()=>{alert("hloo")}}>Click here for change</button> */}
        <input type="text" placeholder="Enter your name" onClick={handlename}></input>
        <h2>{name}</h2>
        </>
    )
}

import { useState } from "react";

export function Eventhandling() {
  const [name, setName] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleName}
      />
      <h2>{name}</h2>
    </>
  );
}
