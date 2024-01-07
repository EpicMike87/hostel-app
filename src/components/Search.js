import React, { useState } from "react";
import HostelDetails from "./HostelDetails";

// Search bar to handle user specified text filtering.

function Search({ hostels, onHostelClick }) {
  const [searchField, setSearchField] = useState("");

  const filteredHostels = hostels.filter((hostel) => {
    const lowerCaseSearchField = searchField.toLowerCase();
    return (
      hostel.name.toLowerCase().includes(lowerCaseSearchField) ||
      hostel.postcode.toLowerCase().includes(lowerCaseSearchField)
    );
  });

  return (
    <div>
      <div>
        <input
          className="form-control"
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchField(e.target.value)}
        />
      </div>
      <div>
        {filteredHostels.map((hostel) => (
          <div
            key={hostel.id}
            onClick={() => onHostelClick(hostel)}
            style={{ cursor: "pointer" }}
          >
            <HostelDetails hostel={hostel} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
