import React, { useState, useEffect } from 'react';
import Search from './Search';
import StarRating from './StarRating';
import SubmitReview from '../services/SubmitReview';
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchHostelData } from '../services/FetchHostelData';
import { getStoredUsername } from '../services/ExtractToken';

const Reviews = () => {
  const [hostels, setHostels] = useState([]);
  const [setSearchField] = useState("");
  const [selectedHostel, setSelectedHostel] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);

  // Get hostel data including reviews.

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

  const handleReviewSubmit = async () => {
    try {
      const { username } = getStoredUsername();
      const submissionResult = await SubmitReview(selectedHostel, reviewText, selectedRating, username);
  
      if (submissionResult) {
        setReviewText("");
        setSelectedRating(0);
      } 
    } catch (error) {
      console.error("Error submitting review:", error);
    }
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
              <StarRating
                totalStars={5}
                onRatingChange={setSelectedRating}
              />
              <textarea className = 'review-text-box'
                placeholder="Enter your review..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
              <p>
                <button className="submit-button" onClick={handleReviewSubmit}>Submit</button>
              </p>
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
