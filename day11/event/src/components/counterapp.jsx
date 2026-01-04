import React from "react";
import "./counter.css";

export class Counterapp extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.Reset = this.Reset.bind(this);
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  Decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  Reset() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div className="counter-container">
        <h1>Counter : {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button>
        <button onClick={this.Reset}>Reset</button>
      </div>
    );
  }
}
