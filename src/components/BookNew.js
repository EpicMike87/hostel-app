import React, { useEffect, useState } from "react";
import Login from "./Login";
import useToken from "./UseToken";
import { getStoredUsername } from "../services/ExtractToken"

export default function Book() {
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
    <div className="account-content">
      <h2>{username} Account</h2>
      <p>Hello {username}! You are successfully logged in.</p>
    </div>
  );
}