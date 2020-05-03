import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <header className="main-header">
      <a href="index.html" className="logo-holder">
        <img src="/Assets/images/logo.png" alt="" />
      </a>
      <div className="sb-button"></div>
      <div className="share-btn showshare">
        <i className="fal fa-megaphone"></i>
        <span>Share</span>
      </div>
      <div className="nav-button-wrap">
        <div className="nav-button">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="nav-holder main-menu">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

Navbar.propTypes = {};

export default Navbar;
