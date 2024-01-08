import React from "react";

// Clear user information in browser session storage on log out.

const LoggedOut = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("token");

  return (
    <div>
      <p>Successfully Logged Out</p>
    </div>
  );
}

export default LoggedOut;