import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobListing from './pages/JobListing';

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <HomePage />
    // </div>
    
    <Router>
        <Navbar />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/job_listing" element={<JobListing />} />
        </Routes>
    </Router>
  );
}

export default App;
