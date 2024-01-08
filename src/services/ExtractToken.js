export const getStoredUsername = () => {
  let username;
  let loggedIn;

  // Extract username from local storage if user is logged in. If not found, default to 'Guest'

  try {
    username = localStorage.getItem("username");

    if (username === null) {
      username = "Guest";
      loggedIn = false;
    } else {
      loggedIn = true;
    }

    return { username, loggedIn };
  } catch (error) {
    console.error(error.message);
    return { username: null, loggedIn: false };
  }
};