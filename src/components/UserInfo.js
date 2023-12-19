import React from "react";
import { Link } from "react-router-dom";
import { getStoredUsername } from "../services/ExtractToken";


// This checks to see if the user is logged in to determine which version of the user info to display
const UserInfo = () => {
  const username = getStoredUsername();
  const isLoggedIn = !!username;

  return (
    <div className="user-info-section">
      {isLoggedIn ? (
        <React.Fragment>
          Welcome, {username}
          <div className="account-buttons">
            <Link to="/account" className="account-button">
              Account
            </Link>
            <Link to="/loggedout" className="account-button">
              Log Out
            </Link>
          </div>
        </React.Fragment>
      ) : (
        <div className="account-buttons">
          Welcome, guest
          <Link to="/account" className="account-button">
            Log In
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
