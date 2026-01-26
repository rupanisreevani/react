import React from "react";
import axios from 'axios'

export class Component1 extends React.Component{
    constructor(){
        super()
        this.state = {
            users : []
        }
    }
    componentDidMount(){
        console.log("Component Did Mount - Phase 1")
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            this.setState({
                users : res.data
            })
        })
        .catch((err)=>console.error(err))
    }
    render(){
        return(
            <>
                <ul>
                    {
                      this.state.users.map((user)=>{
                            return <li key={user.id}>{user.username}</li>
                      })  
                    }
                </ul>
            </>
        )
    }
}