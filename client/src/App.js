import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobListing from './pages/JobListing';
import JobSeeker from './pages/JobSeeker';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/job_listing" element={<JobListing />} />
        <Route path="/job_seeker" element={<JobSeeker />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App;
