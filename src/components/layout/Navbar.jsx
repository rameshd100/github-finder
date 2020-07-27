import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h1>
            <i class="fab fa-github"></i>
            {title}
          </h1>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/Userpage">Users</Link>
        <Link to="/Jobs">Jobs</Link>
      </div>
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
