function Content1() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "30px",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* LEFT */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#8e44ad",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
          alt="left"
          width="80"
        />
        <h2>Left Section</h2>
        <p>This is the left content area</p>
        <button style={btnStyle}>Learn More</button>
      </div>

      {/* CENTER */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#2ecc71",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/919/919851.png"
          alt="center"
          width="80"
        />
        <h2>Center Section</h2>
        <p>This is the center content area</p>
        <button style={btnStyle}>Explore</button>
      </div>

      {/* RIGHT */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#f39c12",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
          alt="right"
          width="80"
        />
        <h2>Right Section</h2>
        <p>This is the right content area</p>
        <button style={btnStyle}>Get Started</button>
      </div>
    </div>
  );
}

const btnStyle = {
  marginTop: "10px",
  padding: "8px 16px",
  border: "none",
  borderRadius: "20px",
  cursor: "pointer",
  backgroundColor: "white",
  color: "#333",
  fontWeight: "bold",
};

export default Content1;
