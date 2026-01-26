// import React from "react";
// import "./CounterPanel.css"
// export class CounterPanel extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: props.initialValue || 0,
//       step: 1
//     };
//   }

//   increment = () => {
//     this.setState({
//       count: this.state.count + Number(this.state.step)
//     });
//   };

//   decrement = () => {
//     this.setState({
//       count: this.state.count - Number(this.state.step)
//     });
//   };

//   changeStep = (e) => {
//     this.setState({ step: e.target.value });
//   };

//   render() {
//     const { count, step } = this.state;

//     return (
//       <div>
//         <h1>Interactive Counter Panel</h1>

//         <h2>Count: {count}</h2>

//         {count > 10 && <p>High Count</p>}
//         {count < 0 && <p>Negative Count</p>}

//         <input
//           type="number"
//           value={step}
//           onChange={this.changeStep}
//         />

//         <div>
//           <button onClick={this.increment}>Increment</button>
//           <button onClick={this.decrement}>Decrement</button>
//         </div>
//       </div>
//     );
//   }
// }


import React from "react";
import "./CounterPanel.css";

export class CounterPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue || 0,
      step: 1
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + Number(this.state.step)
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - Number(this.state.step)
    });
  };

  changeStep = (e) => {
    this.setState({ step: e.target.value });
  };

  render() {
    const { count, step } = this.state;

    return (
      <div className="counter-box">
        <h1>Interactive Counter Panel</h1>

        <h2
          className={
            count > 10 ? "count-green" : count < 0 ? "count-red" : "count-normal"
          }
        >
          Count : {count}
        </h2>

        {count > 10 && <p className="green-text">High Count!</p>}
        {count < 0 && <p className="red-text">Negative Count!</p>}

        <input
          type="number"
          value={step}
          onChange={this.changeStep}
          className="step-input"
        />

        <div className="btn-group">
          <button className="btn green-btn" onClick={this.increment}>
            Increment
          </button>
          <button className="btn red-btn" onClick={this.decrement}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}
