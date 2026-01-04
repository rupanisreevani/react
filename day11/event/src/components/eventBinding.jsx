import React from "react";

export class EventBinding extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "durga",
      gf:"niruu"
    };
  }

  // arrow function automatically binds 'this'
  newgf = () => {
    this.setState({ name: "pandhi" });
  };
  oldgf = ()=>{
    this.setState({name:"durga"})
  }
  naveengf(){
    this.setState({
        gf:"lakshmi"
    })
  }

  render() {
    return (
      <>
        <h1>sai girlfriend name is {this.state.name}</h1>
        <button onClick={this.newgf}>now gf</button>
        <button onClick={this.oldgf}>old gf</button>
        <h1>naveen gf:{this.state.gf}</h1>
        {/* <button onClick={()=>{this.setState({gf:"anii"})}}> second gf </button> */}
        <button onClick={this.naveeng.bind(this)}>second gf</button>
      </>
    );
  }
}
