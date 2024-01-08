// Updated getStoredUsername function
export const getStoredUsername = () => {
  let username;
  let loggedIn;

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
