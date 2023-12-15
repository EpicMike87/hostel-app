import React from "react";

const HostelDetails = ({ hostel }) => {
  const calculateAverageRating = () => {
    if (hostel && hostel.ratings && hostel.ratings.length > 0) {
      const totalRating = hostel.ratings.reduce(
        (acc, rating) => acc + rating, 0
      );
      return (totalRating / hostel.ratings.length).toFixed(1);
    }
    return "N/A";
  }
  return (
    <div style={{ width: "30%", padding: "20px" }}>
      {hostel && (
        <>
          <h2>{hostel.name}</h2>
          <p>{hostel.description}</p>
          <p>{hostel.postcode}</p>
          <p> {calculateAverageRating()}</p>
        </>
      )}
    </div>
  );
};

export default HostelDetails;
