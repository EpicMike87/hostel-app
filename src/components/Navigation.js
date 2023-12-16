import React from "react";
import { Link, Outlet } from "react-router-dom"

const Navigation = () => {
    return (
        <>
            <nav>
                <Link to="/" className="nav-button">
                    View Hostel Map
                </Link>
                <Link to="search" className="nav-button">
                    Find Hostel
                </Link>
                <Link to="Review" className="nav-button">
                    Review a Hostel
                </Link>
                <Link to="Plan" className="nav-button">
                    Plan your Trip
                </Link>
            </nav>   
            <Outlet />  
        </>
    )
}

export default Navigation;