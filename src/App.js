import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from './components/Home';
import Navigation from './components/Navigation';
import ListHostels from './components/ListHostels';
import Placeholder from './components/Placeholder';
import NoPage from './components/NoPage';

function App() {
  return (
    <>
    <div className = "wrapper">
    <BrowserRouter>
      <Routes>
        <Route key="navigation" path="/" element={<Navigation />}>
          <Route key="home" path="/" element={<Home /> } />
          <Route key="search" path="/search" element={<ListHostels />} />
          <Route key="review" path="/review" element={<Placeholder />} />
          <Route key="plan" path="/plan" element={<Placeholder />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
