import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Import the page components to be used by Router
import Home from './components/Home';
import Navigation from './components/Navigation';
import LoggedOut from './components/LoggedOut';
import ListHostels from './components/ListHostels';
//import Placeholder from './components/Placeholder';
import NoPage from './components/NoPage';
import Reviews from './components/Reviews';
import ListItinerary from './components/ListItinerary';
import Account from './components/Account';
import Book from './components/Book';

// Redirect user to correct component via URL.
function App() {
  return (
    <>
    <div className = "wrapper">
    <BrowserRouter>
      <Routes>
        <Route key="navigation" path="/" element={<Navigation />}>
          <Route key="home" path="/" element={<Home /> } />
          <Route key="search" path="/search" element={<ListHostels />} />
          <Route key="review" path="/review" element={<Reviews />} />
          <Route key="book" path="/book" element={<Book />} />
          <Route key="plan" path="/plan" element={<ListItinerary />} />
          <Route key="account" path="/account" element={<Account />} />
          <Route key="loggedout" path="/loggedout" element={<LoggedOut />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
