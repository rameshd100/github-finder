import React from "react";
import axios from "axios";

import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

import "./App.css";

class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className="app">
        <Navbar title="Github Finder" />
        <div className="users-container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
