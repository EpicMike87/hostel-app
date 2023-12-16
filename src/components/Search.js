import React, { useState } from "react";
import HostelDetails from "./HostelDetails";

function Search({ hostels }) {
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
          <HostelDetails key={hostel.id} hostel={hostel} />
        ))}
      </div>
    </div>
  );
}

export default Search;