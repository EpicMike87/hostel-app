import React, { useState, useEffect } from 'react';
import Search from './Search';
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchHostelData } from '../services/FetchHostelData';

const Book = () => {
  const [hostels, setHostels] = useState([]);
  const [setSearchField] = useState("");
  const [selectedHostel, setSelectedHostel] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchHostelData();
        setHostels(data);
      } catch (error) {
        console.error("Error fetching hostels", error);
      }
    };

    fetchData();
  }, []);

  const handleHostelClick = (hostel) => {
    console.log("Hostel clicked:", hostel);
    setSelectedHostel(hostel);
  };

  return (
    <div className="row">
      <div className="col-md-7">
        <Search
          hostels={hostels}
          onSearch={(searchResults) => setHostels(searchResults)}
          onSearchFieldChange={(value) => setSearchField(value)}
          onHostelClick={handleHostelClick}
        />
      </div>
      <div className="col-md-5">
        <div className="send-booking-section">
          <h3>Book Hostel</h3>
          {selectedHostel ? (
            <>
              <p>Book {selectedHostel.name}</p>     
            </>
          ) : (
            <p>Click on a hostel to book</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
