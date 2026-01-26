import React from "react";
export class Conditional extends React.Component{
    constructor(){
        super();
        this.state={
            ismorning:true
        }
    }
    render(){
        return(
            <>
            {
                this.state.ismorning? "good morning":"good evening"
            }
            </>
        )
    }

}