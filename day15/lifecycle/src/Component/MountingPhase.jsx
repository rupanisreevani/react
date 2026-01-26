import React from "react";

export class MountingPhase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello"
    };
    console.log("Constructor: component is created");
  }
  componentDidMount(){
    console.log("componentDidMount phase: executing")
    setTimeout(()=>{
      this.setState({message:"hello there"})


    },2000)

  }

  render() {
    console.log("Render: updating UI");
    return (
      <>
        <h2>{this.state.message}</h2>
      </>
    );
  }
}
