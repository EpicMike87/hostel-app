const API_URL = "http://localhost:3002";

export const fetchHostelData = async () => {
    try {
      const response = await fetch(`${API_URL}/hostels`);
      if (response.ok) {
        const data = await response.json()
        console.log("API Response:", data)
        return data;
      } else {
        console.error("Failed to fetch hostel data");
      }
    } catch (error) {
      console.error("Error fetching hostel data", error);
    }
  };