// const bookHostel = async (selectedHostel, bookerName, startDate, endDate) => {
//   try {
//     if (selectedHostel) {
//       // Get the user-specific itinerary
//       const itineraryResponse = await fetch(`http://localhost:3002/itineraries`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (itineraryResponse.ok) {
//         const newItinerary = await itineraryResponse.json();

//         // Now, you can submit the booking details
//         const bookingResponse = await fetch(`http://localhost:3002/hostels/book/${selectedHostel.id}`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             userName: bookerName,
//             startdate: startDate,
//             enddate: endDate,
//           }),
//         });

//         if (bookingResponse.ok) {
//           console.log("Booking made successfully");
//           return true;
//         } else {
//           console.error("Failed to book hostel");
//           return false;
//         }
//       } else {
//         console.error("Failed to create a new itinerary");
//         return false;
//       }
//     }
//   } catch (error) {
//     console.error("Error booking hostel", error);
//     return false;
//   }
// };

// export default bookHostel;