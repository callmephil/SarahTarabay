import React from "react";
import { Link } from "react-router-dom";
import Social from "../Social";
const routes = [
  {
    route: "/",
    className: "w3-padding-16",
    title: "PORTFOLIO"
  },
  {
    route: "/contact",
    className: "w3-padding-16",
    title: "CONTACT"
  }
];

export default function Sidebar() {
  function w3_close(event) {
    event.preventDefault();
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  return (
    <nav
      className="w3-sidebar w3-bar-block w3-black w3-animate-right w3-top w3-text-light-grey w3-large"
      style={{
        zIndex: "3",
        width: "250px",
        fontWeight: "bold",
        display: "none",
        right: "0"
      }}
      id="mySidebar"
    >
      <button
        style={{ width: "100%" }}
        className="w3-center w3-button w3-white"
        onClick={w3_close}
      >
        ☰
      </button>
      {routes.map(el => {
        return (
          <Link
            className={`w3-bar-item w3-button w3-center ${el.className}`}
            to={el.route}
          >
            {el.title}
          </Link>
        );
      })}
      <Social />
    </nav>
  );
}
