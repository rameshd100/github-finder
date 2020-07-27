import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//Components
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Userpage from "./components/users/User-page";
import Jobs from "./components/layout/Jobs";

class App extends React.Component {
  state = {
    // users: [],
    // loading: false,
  };

  render() {
    return (
      <div className="app">
        <Router>
          <Navbar title="Github Finder" />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/userpage">
              <Userpage />
            </Route>
            <Route exact path="/Jobs">
              <Jobs />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
