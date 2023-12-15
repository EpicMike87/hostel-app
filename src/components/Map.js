import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { fetchHostelData } from "../services/FetchHostelData";

delete L.Icon.Default.prototype.getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

const Map = () => {
  
  const icon = new L.Icon({
    iconUrl: "/markerIcon.svg",
    iconSize: [30, 30]
    })
  
    const initialPosition = [55.8639, -4.24919];
    const [hostelData, setHostelData] = useState([]);
    const [activeHostel, setActiveHostel] = useState(initialPosition);

    const markerClicked = (position) => {
      setActiveHostel(position)
  }

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
  
  console.log("hostelData:", hostelData);

  return (
    <MapContainer
      center={initialPosition}
      zoom={9}
      scrollWheelZoom={true}
      style={{ height: "500px", width: "100%", margin: "0 auto" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {hostelData.map((hostel) => (
                <Marker
                    key={hostel.id}
                    position={[
                        hostel.location.lat,
                        hostel.location.long
                    ]}
                    icon={icon}
                    eventHandlers={{ click: () => markerClicked([hostel.location.lat, hostel.location.long]) }}
                >
                    <Popup>
                        <div className="popup" role="alert">
                        Here is the location of {hostel.name}. <br />
                        {hostel.description}
                        </div>
                    </Popup>
                </Marker>
            ))}
    </MapContainer>
  );
};

export default Map;
