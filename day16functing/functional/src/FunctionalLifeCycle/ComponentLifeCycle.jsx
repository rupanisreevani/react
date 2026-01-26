import { useEffect } from "react";

export function ComponentLifeCycle(){
    useEffect(()=>{
        console.log("Mounting phase -1")


    },[])
    return(
        <>
        <h1>Mounting phase</h1>
        </>
    )
}