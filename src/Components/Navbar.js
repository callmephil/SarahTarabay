import React from "react";
import PropTypes from "prop-types";

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
      {/* mobile nav */}
      <div className="nav-button-wrap">
        <div className="nav-button">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {/* mobile nav end*/}
      {/*  navigation */}
      <div className="nav-holder main-menu">
        <nav>
          <ul>
            <li>
              <a href="#" className="act-link">Home </a>
            </li>
            <li>
              <a href="portfolio.html">Portfolio </a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="contacts.html">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* navigation  end */}
    </header>
  );
}

Navbar.propTypes = {};

export default Navbar;
