import React from "react"
export class Props extends React.Component{
    render(){
        return(
            <>
            <ol>
                {
                    this.props.student ?.map((item,index)=>{
                        return<li key={index}>{item}</li>

                    }
                )
                }
            </ol>
            </>
        )
    }
}