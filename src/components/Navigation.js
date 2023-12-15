import React from "react";
import { Link, Outlet } from "react-router-dom"

const Navigation = () => {
    return (
        <>
            <nav>
                <Link to="/" className="nav-button">
                    Home
                </Link>
                <Link to="aboutus" className="nav-button">
                    About Us
                </Link>
                <Link to="order" className="nav-button">
                    Order
                </Link>
                <Link to="staffpage" className="nav-button">
                    Staff
                </Link>
            </nav>   
            <Outlet />  
        </>
    )
}

export default Navigation;