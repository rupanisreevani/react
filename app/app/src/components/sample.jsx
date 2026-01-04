import React, { Component } from "react";
import "./sample.css";

class Sample extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      message: "Click any button",
    };

    // ✅ Constructor binding
    this.increment = this.increment.bind(this);
  }

  // Method 1: Constructor Binding
  increment() {
    this.setState({
      count: this.state.count + 1,
      message: "Increment using Constructor Binding",
    });
  }

  // Method 2: Arrow function in render
  decrement() {
    this.setState({
      count: this.state.count - 1,
      message: "Decrement using Arrow Function in render",
    });
  }

  // Method 3: Class Property Arrow Function
  reset = () => {
    this.setState({
      count: 0,
      message: "Reset using Class Arrow Function",
    });
  };

  render() {
    return (
      <div className="counter-container">
        <h1 className="title">🎨 Colorful Counter App</h1>
        <h2 className="count">{this.state.count}</h2>
        <p className="message">{this.state.message}</p>

        <div className="btn-group">
          <button className="btn inc" onClick={this.increment}>
            Increment
          </button>

          <button
            className="btn dec"
            onClick={() => this.decrement()}
          >
            Decrement
          </button>

          <button className="btn reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Sample;
