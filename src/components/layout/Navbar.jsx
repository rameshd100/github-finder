import React from "react";
import PropTypes from "prop-types";

import "./Navbar.css";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar">
      <h1>
        <i class="fab fa-github"></i>
        {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propType = {
  title: PropTypes.string.isRequried,
};

export default Navbar;
