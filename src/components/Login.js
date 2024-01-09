import React, { useState } from "react";

async function loginUser(credentials) {
  try {
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Incorrect username or password.");
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error("Error during login:", error.message);
    throw error;
  }
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await loginUser({
        username,
        password,
      });

      localStorage.setItem("token", token);
      localStorage.setItem("username", username);

      setToken(token);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-wrapper">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <p>
          Username{" "}
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
        </p>
        <p>
          Password{" "}
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        {error && <p className="error-message">{error}</p>}
        <div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
