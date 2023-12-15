import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { fetchHostelData } from "../services/FetchHostelData";
import HostelDetails from "./HostelDetails";

const Map = () => {
  const icon = new L.Icon({
    iconUrl: "/icons/location-dot-solid.svg",
    iconSize: [30, 30],
  });

  const initialPosition = [55.8639, -4.24919];
  const [hostelData, setHostelData] = useState([]);
  const [activeHostel, setActiveHostel] = useState(null);

  const markerClicked = (position) => {
    setActiveHostel(
      hostelData.find(
        (hostel) =>
          hostel.location.lat === position[0] && hostel.location.long === position[1]
      )
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchHostelData();
        console.log("Fetched Data:", data);
        setHostelData(data);
      } catch (error) {
        console.error("Error fetching hostel data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <MapContainer
        center={initialPosition}
        zoom={9}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "70%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {hostelData.map((hostel) => (
          <Marker
            key={hostel.id}
            position={[hostel.location.lat, hostel.location.long]}
            icon={icon}
            eventHandlers={{
              click: () => markerClicked([hostel.location.lat, hostel.location.long]),
            }}
          >
            <Popup>
              <div className="popup" role="alert">
                {hostel.name}. <br />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <HostelDetails hostel={activeHostel} />
    </div>
  );
};

export default Map;
