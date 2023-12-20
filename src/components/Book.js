// import React, { useEffect, useState } from "react";
// import Login from "./Login";
// import Search from "./Search";
// import useToken from "./UseToken";
// import { fetchHostelData } from '../services/FetchHostelData';
// import { getStoredUsername } from "../services/ExtractToken";

// const Book = () => {
//   const { token, setToken } = useToken();
//   const [username, setUsername] = useState("");
//   const [selectedHostel, setSelectedHostel] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [hostels, setHostels] = useState([]); // Added state for hostels
//   const [searchField, setSearchField] = useState(""); // Added state for search field

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchHostelData();
//         setHostels(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleHostelClick = (hostel) => {
//     console.log("Hostel clicked:", hostel);
//     // Handle the click action (e.g., navigate to a hostel detail page)
//   };

//   const handleBookingSubmit = async () => {
//     const reviewName = getStoredUsername();
//     const submissionResult = await SubmitBooking(selectedHostel, reviewText, selectedRating, reviewName);
//     if (submissionResult) {
//       setReviewText("");
//       setSelectedRating(0);
//     }
//   };

//   // Check if the user is not logged in
//   if (!token) {
//     return <Login setToken={setToken} />;
//   }

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div className="row">
//       {/* Hostel-related functionality */}
//       <div className="col-md-6">
//         <Search
//           hostels={hostels}
//           onSearch={(searchResults) => setHostels(searchResults)}
//           onSearchFieldChange={(value) => setSearchField(value)}
//           onHostelClick={handleHostelClick}
//         />
//       </div>
//       <div className="col-md-5">
//       <div className="book-hostel-section">
//           <h3>Book Hostel</h3>
//           {selectedHostel ? (
//             <>
//               <p>{selectedHostel.name}</p>
//               <p>{selectedHostel.postcode}</p>
            
              
//               <p>
//                 <button className="submit-button" onClick={handleReviewSubmit}>Submit</button>
//               </p>
//             </>
//           ) : (
//             <p>Click on a hostel to book</p>
//           )}
//         </div>
//         </div>
//       </div>
//   );
// };

// export default Book;
