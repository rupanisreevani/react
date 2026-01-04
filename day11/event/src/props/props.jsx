import React from "react";
import "./Prop.css";

export class Props extends React.Component {
  render() {
    return (
      <div className="employee-card">
        <h1>Employee Details</h1>

        <p><strong>EID:</strong> {this.props.eid}</p>
        <p><strong>ENAME:</strong> {this.props.ename}</p>
        <p><strong>ESALARY:</strong> {this.props.esalary}</p>
        <p><strong>EDEPARTMENT:</strong> {this.props.edepartment}</p>
        <p><strong>EEMAIL:</strong> {this.props.eemail}</p>
      </div>
    );
  }
}
