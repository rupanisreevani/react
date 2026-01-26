import { useState } from "react"

export function EventBinding(){
    const[count,setcount]=useState(0);
    const decrement=()=>{
        setcount(count-1)
    }
    return(
        <>
        <h1>The count:{count}</h1>
        <button onClick={()=>setcount(count+1)}>click here</button>
        <button onClick={decrement}>Decrement</button>

        
        </>
    )
}

import { useState } from "react";

export function EventBinding() {
  const greet = (name) => {
    alert(`Hello ${name}`);
  };

  return (
    <>
      <button onClick={() => greet("Sai")}>
        Display
      </button>
    </>
  );
}
