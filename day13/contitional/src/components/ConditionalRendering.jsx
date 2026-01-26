
import React from "react";
export class ConditionalRendering extends React.Component{
    constructor(){
        super();
        this.state={
            isloggedIn:true
        }
    }

    render(){
        if(this.state.isloggedIn){
            return<h2>loggedin successfully</h2>
        }
        else{
            return<h2>please loging</h2>
        }

    }
}