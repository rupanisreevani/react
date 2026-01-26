import { useState } from "react"

export function Propsandstate(props){
    const[age,setage]=useState(0)
    return(
        <>
        <h2>Funny girl name is:{props.name}</h2>
        <h2>{props.name},ageis {age}</h2>
        <button onClick={()=>{setage(age+1)}}>Increasing</button>
        </>
    )
    

}