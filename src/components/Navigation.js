import React from "react";
import { Link, Outlet } from "react-router-dom"

const Navigation = () => {
    return (
        <>
            <nav>
                <Link to="/" className="nav-button">
                    Map
                </Link>
                <Link to="search" className="nav-button">
                    Search
                </Link>
                <Link to="Review" className="nav-button">
                    Review
                </Link>
                <Link to="Plan" className="nav-button">
                    Plan
                </Link>
            </nav>   
            <Outlet />  
        </>
    )
}

export default Navigation;