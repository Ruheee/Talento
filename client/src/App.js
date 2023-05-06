import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Job_Listing from './pages/job_listing';

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
          <Route path="/job_listing" element={<Job_Listing />} />
        </Routes>
    </Router>
  );
}

export default App;
