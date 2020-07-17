import React from "react";
import Spinner from "../layout/Spinner";

import "./Users.css";
import UserItem from "./Useritem";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="users">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
