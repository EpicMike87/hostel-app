import React, { useState, useEffect } from 'react';
import { fetchItineraryData } from '../services/FetchItineraryData';

const ShowItinerary = () => {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchItineraryData();
        setItineraries(data);
      } catch (error) {
        console.error("Error fetching user's itinerary", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3>Itinerary</h3>
      <ul>
        {itineraries.map((itinerary, index) => (
          <li key={index}>
            <strong>User: {itinerary.user}</strong>
            <p>Hostel: {itinerary.hostel}</p>
            <p>Start Date: {itinerary.startdate}</p>
            <p>End Date: {itinerary.enddate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowItinerary;