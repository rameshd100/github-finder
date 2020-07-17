import React from "react";
import "./Useritem.css";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="user-card">
      <img src={avatar_url} alt="" />

      <div>
        <h3>{login}</h3>
        <button>
          <a href={html_url} alt="Link to github" target="_blank" rel="noopener noreferrer">
            Explore
          </a>
        </button>
      </div>
    </div>
  );
};

export default UserItem;
