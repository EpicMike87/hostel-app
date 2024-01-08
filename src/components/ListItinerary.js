import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { fetchItineraryData } from '../services/FetchItineraryData';
import { fetchHostelData } from '../services/FetchHostelData';

const ListItinerary = () => {
  const [itineraries, setItineraries] = useState([]);
  const [hostels, setHostels] = useState([]);
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [username, setUsername] = useState(""); // Add state for username
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch itinerary data
        const itineraryData = await fetchItineraryData();
        setItineraries(itineraryData);

        // Fetch hostel data
        const hostelsData = await fetchHostelData();
        setHostels(hostelsData);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    // Get the username from local storage
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername || ""); // Set the username or an empty string if not found

    // Set login status
    setIsLoggedIn(storedUsername && storedUsername !== "Guest");

    fetchData();
  }, []);

  // Function to find hostel name by ID
  const findHostelNameById = (hostelID) => {
    const hostel = hostels.find((h) => h.id === hostelID);
    return hostel ? hostel.name : 'Unknown Hostel';
  };

  return (
    <div className="row">
      <div className="col-md-4">
        <h3>My Itinerary</h3>
        {isLoggedIn ? (
          <div className="itinerary-section">
            {itineraries
              .filter((itinerary) => itinerary.userName === username)
              .map((itinerary, index) => (
                <div key={index}>
                  <p>Hostel: {findHostelNameById(itinerary.hostelID)}</p>
                  <p>Check In: {itinerary.startdate}</p>
                  <p>Check Out: {itinerary.enddate}</p>
                </div>
              ))}
          </div>
        ) : (
          <p>Please log in to view your Itinerary</p>
        )}
      </div>
      <div className="col-md-4">
        <h3>Calendar</h3>
        <Calendar className="react-calendar" value={calendarDate} onChange={setCalendarDate} />
      </div>
    </div>
  );
};

export default ListItinerary;