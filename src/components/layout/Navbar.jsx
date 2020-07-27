import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>
          <i class="fab fa-github"></i>
          {title}
        </h1>
      </Link>
      <ul>
        <li>
          <Link to="/Userpage">Users</Link>
        </li>
        <li>
          <Link to="/Jobs">Jobs</Link>
        </li>
      </ul>
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
