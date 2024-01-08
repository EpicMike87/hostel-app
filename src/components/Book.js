import React, { useState, useEffect } from 'react';
import Search from './Search';
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns'; // Import format from date-fns
import { fetchHostelData } from '../services/FetchHostelData';
import SubmitBooking from './SubmitBooking';

const Book = () => {
  const [hostels, setHostels] = useState([]);
  const [setSearchField] = useState("");
  const [selectedHostel, setSelectedHostel] = useState(null);
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchHostelData();
        setHostels(data);

        const storedUsername = localStorage.getItem("username");
        setUsername(storedUsername || "");
        setIsLoggedIn(storedUsername && storedUsername !== "Guest");
      } catch (error) {
        console.error("Error fetching hostels", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleHostelClick = (hostel) => {
    console.log("Hostel clicked:", hostel);
    setSelectedHostel(hostel);
  };

  const handleBookingSubmit = async () => {
    const bookerName = username;
    const startDate = format(checkInDate, 'dd/MM/yyyy');
    const endDate = format(checkOutDate, 'dd/MM/yyyy');

    const submissionResult = await SubmitBooking(selectedHostel, bookerName, startDate, endDate);
    if (submissionResult) {
      setSelectedHostel(null);
      setCheckInDate(new Date());
      setCheckOutDate(new Date());
    }
  };

  return (
    <div className="row">
      <div className="col-md-7">
        {loading ? (
          <p>Loading...</p>
        ) : isLoggedIn ? (
          <Search
            hostels={hostels}
            onSearch={(searchResults) => setHostels(searchResults)}
            onSearchFieldChange={(value) => setSearchField(value)}
            onHostelClick={handleHostelClick}
          />
        ) : (
          <p>Please log in to search for hostels</p>
        )}
      </div>
      <div className="col-md-5">
        <div className="send-booking-section">
          <h3>Book Hostel</h3>
          {loading ? (
            <p>Loading...</p>
          ) : isLoggedIn ? (
            selectedHostel ? (
              <>
                <p>Book {selectedHostel.name}</p>
                <div>
                  <label>Check In Date:</label>
                  <DatePicker selected={checkInDate} onChange={date => setCheckInDate(date)} dateFormat="dd/MM/yyyy" />
                </div>
                <div>
                  <label>Check Out Date:</label>
                  <DatePicker selected={checkOutDate} onChange={date => setCheckOutDate(date)} dateFormat="dd/MM/yyyy" />
                </div>
                <button onClick={handleBookingSubmit} className='btn btn-primary'>Submit</button>
              </>
            ) : (
              <p>Click on a hostel to book</p>
            )
          ) : (
            <p>Please log in to book a hostel</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;