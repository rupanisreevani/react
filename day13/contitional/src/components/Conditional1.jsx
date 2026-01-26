import React from "react"
export class Conditional1 extends React.Component{
    constructor(){
        super()
        this.state={
            hadLunch:true
        }
    }
    render(){
        return(
            <>
            {
                this.state.hadLunch && <p>Healthy</p>
            }
            </>

        )
    }
}