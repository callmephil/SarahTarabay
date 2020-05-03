import React from "react";
import PropTypes from "prop-types";

function Sidebar(props) {
  return (
    <React.Fragment>
      <div className="sb-overlay"></div>
      <div className="hiiden-sidebar-wrap outsb">
          {/* sb-widget-wrap*/}
          <div className="sb-widget-wrap fl-wrap">
            <h3>We're Are Social</h3>
            <div className="sb-widget    fl-wrap">
              <div className="sidebar-social fl-wrap">
                <ul>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-vk"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* sb-widget-wrap end*/}
          {/* sb-widget-wrap*/}
          <div className="sb-widget-wrap fl-wrap">
            <h3>Our Last Twitts</h3>
            <div className="sb-widget  fl-wrap">
              <div id="footer-twiit"></div>
              <a href="#" target="_blank" className="twitt_btn fl-wrap">
                Follow Us
              </a>
            </div>
          </div>
          {/* sb-widget-wrap end*/}
        </div>
    </React.Fragment>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
