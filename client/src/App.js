import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobListing from './pages/JobListing';
import JobSeeker from './pages/JobSeeker';

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
          <Route path="/job_seeker" element={<JobSeeker />} />
        </Routes>
    </Router>
  );
}

export default App;
