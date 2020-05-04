import React from "react";
import PropTypes from "prop-types";

function PageFooter(props) {
  return (
    <footer className="min-footer fl-wrap content-animvisible">
      <div className="container small-container">
        <div className="footer-inner fl-wrap">
          <div className="policy-box">
            <span>&#169; Kotlis 2019 / All rights reserved. </span>
          </div>
          <a href="#" className="to-top-btn to-top">
            Back to top <i className="fal fa-long-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

PageFooter.propTypes = {};

export default PageFooter;
