import React, { useState, useEffect } from 'react';
import { fetchItineraryData } from '../services/FetchItineraryData';
import { fetchHostelData } from '../services/FetchHostelData';

const ListItinerary = () => {
  const [itineraries, setItineraries] = useState([]);
  const [hostels, setHostels] = useState([]);
  const [setSelectedItinerary] = useState(null);

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
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  // Function to find hostel name by ID
  const findHostelNameById = (hostelID) => {
    const hostel = hostels.find((h) => h.id === hostelID);
    return hostel ? hostel.name : 'Unknown Hostel';
  };

  return (
    <div className="row">
      <div className="col-md-5">
        <div className="itinerary-section">
          <h3>My Itinerary</h3>
          {itineraries.map((itinerary, index) => (
            <div key={index} onClick={() => setSelectedItinerary(itinerary)}>
              <p>Hostel: {findHostelNameById(itinerary.hostelID)}</p>
              <p>Check In: {itinerary.startdate}</p>
              <p>Check Out: {itinerary.enddate}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Omitted the rest of your component */}
    </div>
  );
};

export default ListItinerary;
