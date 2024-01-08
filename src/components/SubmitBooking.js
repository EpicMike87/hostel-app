// SubmitBooking.js

const SubmitBooking = async (selectedHostel, userName, startDate, endDate) => {
  try {
    const bookingResponse = await fetch(`http://localhost:3002/itineraries/new/${userName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: userName,
        hostelID: selectedHostel.id,
        startdate: startDate,
        enddate: endDate,
      }),
    });

    if (bookingResponse.ok) {
      console.log("Booking submitted successfully");
      return true;
    } else {
      console.error("Failed to submit booking");
      return false;
    }
  } catch (error) {
    console.error("Error submitting booking", error);
    return false;
  }
};

export default SubmitBooking;
