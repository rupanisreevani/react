import React from "react";

export class UpdatingPhase extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate phase");
    console.log("Previous count value:", prevState.count);
    console.log("Current count value:", this.state.count);
  }

  render() {
    console.log("Render method");
    return (
      <>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}
