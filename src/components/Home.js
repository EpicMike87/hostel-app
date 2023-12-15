import React from "react";
import Map from "./Map";

const Home = () => {
    // Stuff will go here later

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h3>AlbaAdvenure</h3>
                    <p>Welcome to AlbaAdvenure Hostels</p>

                </div>
                <div className="col">
                    <h3>Hostel Maps</h3>
                    <Map />
                </div>
            </div>
        </div>
    );
};

export default Home;
