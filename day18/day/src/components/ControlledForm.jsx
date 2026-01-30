import { useState } from "react"

export function ControlledForm(){
    const[name,setname]=useState("");
    const handleData=(e)=>{
        e.preventDefault();
        alert(`Hello,${name}`)

    }
    return(
        <>
        <form onSubmit={handleData}>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)}></input><br></br><br></br>
             <button>submit</button>
    
        </form>
        </>
    )
}