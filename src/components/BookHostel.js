// SubmitReview.js

const BookHostel = async (selectedHostel, reviewText, selectedRating) => {
    try {
      if (selectedHostel) {
        const reviewResponse = await fetch(`http://localhost:3002/hostels/review/${selectedHostel.id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            reviewer: "User", // Eventually the logged in username will appear here
            review: reviewText,
          }),
        });
  
        if (reviewResponse.ok) {
          console.log("Review submitted successfully");
        } else {
          console.error("Failed to submit review");
          return false;
        }
  
        const ratingResponse = await fetch(`http://localhost:3002/hostels/rate/${selectedHostel.id}/${selectedRating}`, {
          method: 'GET',
        });
  
        if (ratingResponse.ok) {
          console.log("Rating submitted successfully");
        } else {
          console.error("Failed to submit rating");
        }
  
        return true;
      }
    } catch (error) {
      console.error("Error submitting review and rating", error);
      return false;
    }
  };
  
  export default BookHostel;