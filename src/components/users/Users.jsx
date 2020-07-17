import React, { Component } from "react";

import "./Users.css";
import UserItem from "./Useritem";

class Users extends Component {
  render() {
    return (
      <div className="users">
        {this.props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
