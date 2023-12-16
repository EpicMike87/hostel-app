import React, { useState } from "react";
import Star from "./Star";

const HostelDetails = ({ hostel }) => {
  const calculateAverageRating = () => {
    if (hostel && hostel.ratings && hostel.ratings.length > 0) {
      const sum = hostel.ratings.reduce((total, rating) => total + rating, 0);
      const average = sum / hostel.ratings.length;
      return Math.round(average);
    }
    return 0;
  };

  const averageRating = calculateAverageRating();
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  const togglePhonePopup = () => {
    setShowPhonePopup(!showPhonePopup);
    setShowEmailPopup(false); // Close the email popup when opening phone popup
  };

  const toggleEmailPopup = () => {
    setShowEmailPopup(!showEmailPopup);
    setShowPhonePopup(false); // Close the phone popup when opening email popup
  };

  return (
    <div style={{ width: "30%", padding: "20px" }}>
      {hostel && (
        <>
          <h2>{hostel.name}</h2>
          <p>{hostel.postcode}</p>
          <p>Cafe Bar Parking Bike Shelter</p>
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
        </>
      )}
    </div>
  );
};

export default HostelDetails;
