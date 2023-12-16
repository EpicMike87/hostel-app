import React, { useState, useEffect } from 'react';
import HostelDetails from './HostelDetails';
import Search from './Search';
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Row, Col } from 'react-bootstrap';
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
    <div>
      <Search
        hostels={hostels}
        onSearch={(searchResults) => setHostels(searchResults)}
        onSearchFieldChange={(value) => setSearchField(value)}
      />
      <Row>
        {filteredHostels.map((hostel) => (
          <Col key={hostel.id} xs={12} md={6}>
            <Accordion>
              <Accordion.Item eventKey={hostel.id}>
                <HostelDetails hostel={hostel} />
              </Accordion.Item>
            </Accordion>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListHostels;
