import React, { useEffect, useState } from "react";
// import axios from "axios";
import "./styles/App.scss";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import JobListing from './pages/JobListing';
import JobSeeker from './pages/JobSeeker';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useAuth0 } from "@auth0/auth0-react";
import { useProtectedRoute } from "./util/useProtectedRoute";

function App() {

  const { isAuthenticated } = useAuth0();

  // const protectRoute = (route) => {
  //   isAuthenticated ? route : <Navigate to="/" replace />
  // };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job_listing" element={<JobListing />} />
        <Route
          path="/job_seeker"
          element={
            <JobSeeker
              data={jobSeekerData}
              interested={employerInterested}
              notInterested={jobSeekersAPICall}
              reset={() => reset(jobSeekersAPICall)}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </Router>
  );
}


export default App;
