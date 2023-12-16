import React, { useState, useEffect } from 'react';
import Search from './Search';
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchHostelData } from '../services/FetchHostelData';

const Reviews = () => {
  const [hostels, setHostels] = useState([]);
  const [setSearchField] = useState("");
  const [selectedHostel, setSelectedHostel] = useState(null);
  const [reviewText, setReviewText] = useState(""); // New state for the review text

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

  const handleReviewSubmit = () => {
    // Implement your logic to submit the review
    console.log("Review submitted:", reviewText);
    // You can reset the review text after submission if needed
    setReviewText("");
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
        <div className="leave-review-section">
          <h3>Review Hostel</h3>
          {selectedHostel ? (
            <>
              <p>{selectedHostel.name}</p>
              <textarea
                placeholder="Enter your review..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
              <p><button onClick={handleReviewSubmit}>Submit</button></p>
            </>
          ) : (
            <p>Click on a hostel to leave a review</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
