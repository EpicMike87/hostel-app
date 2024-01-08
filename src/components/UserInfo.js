import React from "react";
import { Link } from "react-router-dom";
import { getStoredUsername } from "../services/ExtractToken";

const UserInfo = () => {
  const { username, loggedIn } = getStoredUsername();

  return (
    <div className="user-info-section">
      <div className="account-buttons">
        {loggedIn ? (
          <React.Fragment>
            Welcome, {username}
            <Link to="/account" className="account-button">
              Account
            </Link>
            <Link to="/loggedout" className="account-button">
              Log Out
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            Welcome, Guest
            <Link to="/account" className="account-button">
              Log In
            </Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default UserInfo;