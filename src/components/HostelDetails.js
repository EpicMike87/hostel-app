import React, { useState } from "react";
import Star from "./Star";

// Display hostel details.

const HostelDetails = ({ hostel }) => {
  const calculateAverageRating = () => {
    if (hostel && hostel.ratings && hostel.ratings.length > 0) {
      const sum = hostel.ratings.reduce((total, rating) => total + rating, 0);
      const average = sum / hostel.ratings.length;
      return Math.round(average);
    }
    return 0;
  };

// Hostel contact information pop up.

  const averageRating = calculateAverageRating();
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  const togglePhonePopup = () => {
    setShowPhonePopup(!showPhonePopup);
    setShowEmailPopup(false);
  };

  const toggleEmailPopup = () => {
    setShowEmailPopup(!showEmailPopup);
    setShowPhonePopup(false);
  };

  // Return the hostel information and display in panel for each instance of Hostel found.

  return (
    <div >
      {hostel && (
        <>
          <div className = "hostel-panel">
          <div className = "hostel-title">{hostel.name}</div>
          <div className = "hostel-postcode">{hostel.postcode}</div>
          <div className = "hostel-features">
          {hostel.cafe && (
            <div className = "feature-icons">
              <img
                src="/icons/mug-saucer-solid.svg"
                alt="Cafe Icon"
              />
            </div>
          )}

          {hostel.pub && (
            <div className = "feature-icons">
              <img
                src="/icons/beer-mug-empty-solid.svg"
                alt="Pub Icon"
              />
            </div>
          )}

          {hostel.parking && (
            <div className = "feature-icons">
              <img
                src="/icons/bicycle-solid.svg"
                alt="Bicycle Icon"
              />
            </div>
          )}

          {hostel.parking && (
             <div className = "feature-icons">
              <img
                src="/icons/square-parking-solid.svg"
                alt="Parking Icon"
              />
            </div>
          )}
          </div>

          <p>{hostel.description}</p> 
          <div>
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} selected={index < averageRating} />
            ))}
            <div className="contact-section">
              <button
                className="contact-button"
                onClick={togglePhonePopup}
              >
                <img
                  src="/icons/phone-solid.svg"
                  alt="Phone Icon"
                  style={{ width: "25px", margin: "5px" }}
                />
              </button>
              <button
                className="contact-button"
                onClick={toggleEmailPopup}
              >
                <img
                  src="/icons/envelope-solid.svg"
                  alt="Email Icon"
                  style={{ width: "25px", margin: "5px" }}
                />
              </button>
            </div>
          </div>

          {showPhonePopup && (
            <div className="contact-popup">
              <p>Phone: {hostel.phone}</p>
            </div>
          )}

          {showEmailPopup && (
            <div className="contact-popup">
              <p>Email: {hostel.email}</p>
            </div>
          )}
          </div>
        </>
      )}
    </div>
    
  );
};

export default HostelDetails;
