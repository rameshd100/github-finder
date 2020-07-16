import React from "react";
import PropTypes from "prop-types";

import "./Navbar.css";

class Navbar extends React.Component {
  static defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github",
  };

  static propType = {
    title: PropTypes.string.isRequried,
  };

  render(props) {
    return (
      <nav className="navbar">
        <h1>
          <i class="fab fa-github"></i>
          {this.props.title}
        </h1>
      </nav>
    );
  }
}
export default Navbar;
