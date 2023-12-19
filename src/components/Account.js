import React, { useEffect, useState } from "react";
import Login from "./Login";
import useToken from "./UseToken";
import { getStoredUsername } from "./services/ExtractToken"

export default function Account() {
  const { token, setToken } = useToken();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = getStoredUsername();
    setUsername(storedUsername);
  }, [token]);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="container-fluid">
      <h1 className="headingStyleLeft">Account Dashboard</h1>
      <p>Hello {username}! You are successfully logged in.</p>
    </div>
  );
}