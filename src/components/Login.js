import React, { useState } from "react";

async function loginUser(credentials) {
  return fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((data) => data.json())
    // .then(data =>
    //  {return data.token}
    // )
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });

    // Save the token to local storage for authentication
    localStorage.setItem("token", token);

    // Save the username to local storage so the application knows who is logged in
    localStorage.setItem("username", username);

    // Reload the page so that site updates with correct messages.
    window.location.reload();

    setToken(token);
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
        <div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}