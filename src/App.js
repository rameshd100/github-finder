import React from "react";

import Navbar from "./components/layout/Navbar";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" />
        <h1>Github Finder</h1>
      </div>
    );
  }
}

export default App;
