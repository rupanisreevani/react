import React from "react"
export default class UnmountingPhase extends React.Component{
    componentDidMount(){
        this.timer=setInterval(()=>{
            console.log("timer is runing")
        } ,1000)
    }
    componentWillUnmount(){
        console.log("UnmountingPhase")
        clearInterval(this.timer)
    }
    render(){
        return(
            <>
            <h1>component UnmountingPhase</h1>
            </>
        )
    }
}