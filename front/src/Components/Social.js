import React from "react";
import "../Layout/Social.css";

export default function Social() {
  return (
    <ul className="social-icon">
      {["facebook-official", "instagram", "codepen", "github"].map(icon => {
        return (
          <li key={icon}>
            <i className={`fa fa-${icon}`} />
          </li>
        );
      })}
    </ul>
  );
}
