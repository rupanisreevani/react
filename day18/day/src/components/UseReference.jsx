import { useRef } from "react"

export function UseReference(){
    const inputRef=useRef(null)
    const handleData =()=>{
        inputRef.current.focus();
    }
    return(
        <>
        <input type="text" ref={inputRef}></input><br></br><br></br>
        <button onClick={handleData}>Submit</button>
        </>
    )
}