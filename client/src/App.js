import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/App.scss";


import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobListing from './pages/JobListing';
import JobSeeker from './pages/JobSeeker';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Messages from "./pages/Messages"
import { getUnmatchedItems, randomIndex } from "./helpers/selectors";

function App() {
  const [jobSeeker, setJobSeeker] = useState({
    id: "",
    job_title: "",
  });

  const data = jobSeeker[0];



  const jobTitle = data?.job_title;
  const jobDescription = data?.job_description;
  const city = data?.city;
  const country = data?.country;
  const salary = data?.salary;
  const skills = data?.skills;
  const datePosted = data?.date_posted;
  const employer = data?.employer_id;
  
  console.log(jobTitle)

  useEffect(() => {
    axios.get("/api/job_listings").then(response => {
      setJobSeeker(response.data);
    });
  }, []);
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/job_listing" element={<JobListing jobTitle={jobTitle} employer={employer} jobDescription={jobDescription} salary={salary} skills={skills} city={city} country={country} datePosted={datePosted} />} />
        <Route path="/job_seeker" element={<JobSeeker />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}


export default App;
