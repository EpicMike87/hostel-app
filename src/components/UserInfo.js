import React from "react";
import { Link } from "react-router-dom";

const UserInfo = () => {
  return (
    <div className="user-info-section">
      Welcome, Guest
      <div className="account-buttons">
        <Link to="/account" className="account-button">
          Account
        </Link>
        <Link to="/loggedout" className="account-button">
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default UserInfo;
