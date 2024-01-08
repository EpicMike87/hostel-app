const API_URL = "http://localhost:3002";

export const fetchItineraryData = async () => {
    try {
      const response = await fetch(`${API_URL}/itineraries`);
      if (response.ok) {
        const data = await response.json()
        console.log("API Response:", data)
        return data;
      } else {
        console.error("Failed to fetch itineraries data");
      }
    } catch (error) {
      console.error("Error fetching itineraries data", error);
    }
  };