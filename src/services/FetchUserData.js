const API_URL = "http://localhost:3002";

export const fetchUserData = async () => {
    try {
      const response = await fetch(`${API_URL}/users`);
      if (response.ok) {
        const data = await response.json()
        console.log("API Response:", data)
        return data;
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };