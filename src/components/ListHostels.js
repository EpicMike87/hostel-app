import React, { useState, useEffect } from 'react';
import Search from './Search';
import Filter from './Filter';
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchHostelData } from '../services/FetchHostelData';

const ListHostels = () => {
  const [hostels, setHostels] = useState([]);
  const [setSearchField] = useState("");
  const [showCafe, setShowCafe] = useState(false);
  const [showPub, setShowPub] = useState(false);
  const [showParking, setShowParking] = useState(false);
  const [showBicycleStorage, setShowBicycleStorage] = useState(false);

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

  const applyFilters = () => {
    return hostels.filter((hostel) => {
      const matchesCafe = !showCafe || hostel.cafe;
      const matchesPub = !showPub || hostel.pub;
      const matchesParking = !showParking || hostel.parking;
      const matchesBicycleStorage = !showBicycleStorage || hostel.bikeshelter;

      return matchesCafe && matchesPub && matchesParking && matchesBicycleStorage;
    });
  };

  const filteredHostels = applyFilters();

  const handleHostelClick = (hostel) => {
    console.log("Hostel clicked:", hostel);
    setSelectedHostel(hostel);
  };

  return (
    <div className="row">
      <div className="col-md-7">
        <Search
          hostels={filteredHostels}
          onSearch={(searchResults) => setHostels(searchResults)}
          onSearchFieldChange={(value) => setSearchField(value)}
          onHostelClick={handleHostelClick}
        />
      </div>
      <div className="col-md-5">
        <Filter
          showCafe={showCafe}
          showPub={showPub}
          showParking={showParking}
          showBicycleStorage={showBicycleStorage}
          setShowCafe={setShowCafe}
          setShowPub={setShowPub}
          setShowParking={setShowParking}
          setShowBicycleStorage={setShowBicycleStorage}
        />
         <div className="reviews-section">
          <h3>Reviews</h3>
          {selectedHostel ? (
            <>
              <p>Reviews for {selectedHostel.name}</p>
              <ul>
                {selectedHostel.reviews.map((review, index) => (
                  <li key={index}>
                    <strong>{review.reviewer}:</strong>
                   <p>{review.review} </p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>Click on a hostel to see its reviews</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListHostels;
