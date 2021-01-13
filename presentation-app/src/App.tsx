import React from "react";
import github from "./assets/img/github.png";
import facebook from "./assets/img/Facebook.png";
import instagram from "./assets/img/instagram.png";
import gmail from "./assets/img/gmail.png";

function App() {
  return (
    <div
      style={{
        fontFamily: "Titillium Web",
        width: "100vw",
        height: "100vh",
        color: "#FFFFFF",
        backgroundColor: "#2C3E50",
        backgroundImage: "linear-gradient(160deg, #2C3E50 0%, #434343 74%)",
      }}
      className="container-fluid d-flex flex-column justify-content-center align-items-center"
    >
      <h1 style={{ fontSize: "80px", fontWeight: "bold" }}>
        Under construction
      </h1>
      <footer
        className="position-fixed"
        style={{
          bottom: "0px",
          height: "50px",
        }}
      >
        <a href="https://github.com/adelingabriel08">
          <img src={github} height="30px" />
        </a>
        <a href="https://www.facebook.com/adelingabriel08/">
          <img src={facebook} height="30px" />
        </a>
        <a href="https://www.instagram.com/adelingabriel08">
          <img src={instagram} height="30px" />
        </a>
        <a href="mailto:adelingabriel08@gmail.com">
          <img src={gmail} height="30px" />
        </a>
      </footer>
    </div>
  );
}

export default App;
