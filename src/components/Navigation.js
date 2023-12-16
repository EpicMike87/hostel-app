import React from "react";
import { Link, Outlet } from "react-router-dom";
import UserInfo from "./UserInfo";

const Navigation = () => {
  return (
    <div className="navigation-section">
      <div className="nav-buttons">
        <Link to="/" className="nav-button">
          View Hostel Map
        </Link>
        <Link to="search" className="nav-button">
          Find Hostel
        </Link>
        <Link to="Review" className="nav-button">
          Review a Hostel
        </Link>
        <Link to="Plan" className="nav-button">
          Plan your Trip
        </Link>
        <div className = "heading">Alba Adventures</div>
      </div>
      <div className="user-info">
        <UserInfo />
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
