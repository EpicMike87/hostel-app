export const getStoredUsername = () => {
    let username;
  
    try {
      username = localStorage.getItem("username");
  
      if (username === null) {
        username = "Guest";
      }
  
      return username;
    } catch (error) {
      console.error(error.message);

      return null;
    }
  };
  