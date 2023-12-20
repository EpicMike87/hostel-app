import React, { useEffect, useState } from "react";
import Login from "./Login";
import useToken from "./UseToken";
import { getStoredUsername } from "../services/ExtractToken";

export default function Account() {
  const { token, setToken } = useToken();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const { username: storedUsername} = await getStoredUsername();
        setUsername(storedUsername);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsername();
  }, [token]);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="account-content">
      <h2>{username} Account</h2>
      <p>Hello {username}! You are successfully logged in.</p>
    </div>
  );
}
