import React from "react";
import Map from "./Map";

// Load map on initial navigation to Home page.

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <Map />
                </div>
            </div>
        </div>
    );
};

export default Home;
