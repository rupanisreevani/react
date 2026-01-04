import React from "react";

export class Childrenprops extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "220px",
          margin: "20px auto",
          padding: "20px",
          textAlign: "center",
          background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          transition: "0.3s"
        }}
      >
        <h2
          style={{
            color: "#ffffff",
            fontSize: "22px",
            marginBottom: "10px",
            fontWeight: "bold"
          }}
        >
          {this.props.name}
        </h2>

        <h3
          style={{
            backgroundColor: "#ffffff",
            color: "#ff4b5c",
            padding: "6px",
            borderRadius: "8px",
            margin: "8px 0",
            fontSize: "16px"
          }}
        >
          Age: {this.props.age}
        </h3>

        <h3
          style={{
            backgroundColor: "#ffffff",
            color: "#6a11cb",
            padding: "6px",
            borderRadius: "8px",
            margin: "8px 0",
            fontSize: "16px"
          }}
        >
          Place: {this.props.place}
          <h3>
            skills:{this.props.skills}
          </h3>
          
        </h3>
      </div>
    );
  }
}
