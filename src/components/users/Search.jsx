import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {
    text: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" }); // Setting form empty after search
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div className="search">
        <form onSubmit={this.onSubmit}>
          <input type="text" name="text" placeholder="Search Users" className="search-field" value={this.state.text} onChange={this.onChange}></input>
          <input type="submit" value="SEARCH" className="search-input"></input>
        </form>
      </div>
    );
  }
}

export default Search;
