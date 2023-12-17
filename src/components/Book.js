import React, { useState, useEffect } from 'react';
import Search from './Search';
import StarRating from './StarRating';
import SubmitReview from './SubmitReview';
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchHostelData } from '../services/FetchHostelData';

const Book = () => {
  const [hostels, setHostels] = useState([]);
  const [setSearchField] = useState("");
  const [selectedHostel, setSelectedHostel] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);

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
    const submissionResult = await SubmitReview(selectedHostel, reviewText, selectedRating);
    if (submissionResult) {
      setReviewText("");
      setSelectedRating(0);
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
        <div className="book-hostel-section">
          <h3>Book Hostel</h3>
          {selectedHostel ? (
            <>
              <p>{selectedHostel.name}</p>
             
             
              <p>
                <button className="submit-button" onClick={handleBookingSubmit}>Submit</button>
              </p>
            </>
          ) : (
            <p>Click a hostel to book</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
