import React, { useState, useEffect } from 'react';
import Search from './Search';
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchHostelData } from '../services/FetchHostelData';

const ListHostels = () => {
  const [hostels, setHostels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchHostelData();
        setHostels(data);
      } catch (error) {
        console.error("Error fetching hostels", error);
      }
    };

    fetchData();
  }, []);

  const [searchField, setSearchField] = useState("");

  const filteredHostels = hostels.filter((hostel) => {
    const lowerCaseSearchField = searchField.toLowerCase();
    return (
      hostel.name.toLowerCase().includes(lowerCaseSearchField) ||
      hostel.postcode.toLowerCase().includes(lowerCaseSearchField)
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <Search
            hostels={hostels}
            onSearch={(searchResults) => setHostels(searchResults)}
            onSearchFieldChange={(value) => setSearchField(value)}
          />
        </div>
        <div className="col-md-4">
          <div>Placeholder text for the right column</div>
        </div>
      </div>
    </div>
  );
};

export default ListHostels;
