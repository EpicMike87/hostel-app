import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({ totalStars = 5, onRatingChange }) => {
  const createArray = (length) => [...Array(length)];
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (selectedRating) => {
    setSelectedStars(selectedRating);
    onRatingChange(selectedRating);
  };

  return (
    <div>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => handleStarClick(i + 1)}
        />
      ))}
      <p>{selectedStars} Stars.</p>
    </div>
  );
};

export default StarRating;