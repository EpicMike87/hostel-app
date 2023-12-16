import React, { useState, useEffect } from 'react';
import HostelDetails from './HostelDetails';
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from 'react-bootstrap';
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
  
  if (!hostels || hostels.length === 0) {
    return <p>No hostels available</p>;
  }

  return (
    <Accordion>
      {hostels.map((hostel) => (
        <Accordion.Item key={hostel.id} eventKey={hostel.id}>
          <HostelDetails hostel={hostel} />
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default ListHostels;
