import React, { Component } from "react";
import "./LoginStatus.css";

class LoginStatus extends Component {
  constructor() {
    super();
    this.state = {
      status: "Logged Out",
      color: "#f44336",
    };

    // Constructor Binding
    this.login = this.login.bind(this);
  }

  // Method 1: Constructor Binding
  login() {
    this.setState({
      status: "Logged In",
      color: "#4caf50",
    });
  }

  // Method 2: Arrow function in render
  logout() {
    this.setState({
      status: "Logged Out",
      color: "#f44336",
    });
  }

  // Method 3: Class Property Arrow Function
  toggle = () => {
    this.setState((prevState) => ({
      status: prevState.status === "Logged In" ? "Logged Out" : "Logged In",
      color: prevState.status === "Logged In" ? "#f44336" : "#4caf50",
    }));
  };

  render() {
    return (
      <div className="login-box">
        <h1> Login Status App</h1>

        <h2 style={{ color: this.state.color }}>
          {this.state.status}
        </h2>

        <div className="btns">
          <button className="login" onClick={this.login}>
            Login
          </button>

          <button
            className="logout"
            onClick={() => this.logout()}
          >
            Logout
          </button>

          <button className="toggle" onClick={this.toggle}>
            Toggle
          </button>
        </div>
      </div>
    );
  }
}

export default LoginStatus;
