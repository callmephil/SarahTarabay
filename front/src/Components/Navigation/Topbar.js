import React from "react";

export default function Topbar() {
  function w3_open(event) {
    event.preventDefault();
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
  function w3_close(event) {
    event.preventDefault();
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  return (
    <>
      <header
        className="w3-container w3-top w3-white w3-xlarge w3-padding-16"
        // style={{ borderBottom: "black 1px solid" }}
      >
        <span className="w3-left w3-padding">SARAH TARABAY</span>
        <button className="w3-right w3-button w3-white" onClick={w3_open}>
          ☰
        </button>
      </header>
      <div
        className="w3-overlay w3-animate-opacity"
        onClick={w3_close}
        style={{ cursor: "pointer" }}
        title="close side menu"
        id="myOverlay"
      />
    </>
  );
}
