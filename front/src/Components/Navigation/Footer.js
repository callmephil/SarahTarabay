import React from "react";
import Social from "../Social";
import "../../Layout/Footer.css";

export default function Footer() {
  return (
    <footer className="w3-container w3-center background ">
      <div className="w3-row-padding">
        <div style={{float: "left"}}>
            <Social />
        </div>
        <div style={{float: "right"}} className="copyright">
          <p>
          <span> Copyright 2020-2021 @Sarah Tarabay </span>
          <span style={{fontSize: '12px'}}> Design by w3.css, built with React by Phil </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
