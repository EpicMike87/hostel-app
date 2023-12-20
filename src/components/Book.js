import React, { useEffect, useState } from "react";
import Login from "./Login";
import useToken from "./UseToken";
import { getStoredUsername } from "../services/ExtractToken";

export default function Book() {
  const { token, setToken } = useToken();
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const { username: storedUsername} = await getStoredUsername();
        setUsername(storedUsername);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsername();
  }, [token]);

  if (!token) {
    return <Login setToken={setToken} />;
  }



  if (error) {
    return <p>Error: {error}</p>;
  }

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
}
