import React from "react";
import PropTypes from "prop-types";

function SocialLinks(props) {
  const socialLinks = [
    {
      link: "#",
      icon: "fa-facebook-f",
    },
    {
      link: "#",
      icon: "fa-instagram",
    },
    {
      link: "#",
      icon: "fa-twitter",
    },
    {
      link: "#",
      icon: "fa-vk",
    },
  ];
  return (
    <ul>
      {socialLinks &&
        socialLinks.map(({ link, icon }, index) => (
          <li>
            <a href={link} target="_blank">
              <i className={`fab ${icon}`}></i>
            </a>
          </li>
        ))}
    </ul>
  );
}

SocialLinks.propTypes = {};

export default SocialLinks;
