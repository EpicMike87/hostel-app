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
        <Link to="review" className="nav-button">
          Review a Hostel
        </Link>
        <Link to="book" className="nav-button">
          Book a Hostel
        </Link>
        <Link to="plan" className="nav-button">
          View Your Plan
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
