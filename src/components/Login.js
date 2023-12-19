import React, { useState } from "react";
import { useLocalStorage } from "./UseLocalStorage";

async function loginUser(credentials, setToken, setStoredToken) {
  try {
    const response = await fetch("http://localhost:3002/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      // Handle login error
      console.error("Login failed");
      return;
    }

    const data = await response.json();

    // Save the token locally using the useLocalStorage hook
    setStoredToken(data.token);

    // Set the token using the provided setToken function
    setToken(data.token);

    console.log("Login successful");
  } catch (error) {
    console.error("Login error:", error);
  }
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // Use the useLocalStorage hook to manage the token in local storage
  const [storedToken, setStoredToken] = useLocalStorage("token", null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if both username and password are provided
    if (!username || !password) {
      console.error("Username and password are required");
      return;
    }

    // Call the loginUser function with credentials, setToken, and setStoredToken
    await loginUser({ username, password }, setToken, setStoredToken);
  };

  // Use the stored token to check if the user is already logged in
  React.useEffect(() => {
    if (storedToken) {
      setToken(storedToken);
    }
  }, [storedToken, setToken]);

  return (
    <div className="login-wrapper">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <p>
          Username{" "}
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </p>
        <p>
          Password{" "}
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </p>
        <div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
