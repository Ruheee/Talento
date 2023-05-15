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
import {
  getUnmatchedJobListings,
  getUnmatchedJobSeekers,
  randomIndex,
} from "./helpers/selectors";

function App() {
  const [state, setState] = useState({
    jobListings: {},
    jobListingsIndex: 0,
    jobSeekers: {},
    jobSeekersIndex: 0,
  });
  
  const jobListingsAPI = "/api/job_listings";
  const jobSeekersAPI = "/api/job_seekers";
  const matchesAPI = "/api/matches";

  const jobListingData = state.jobListings[state.jobListingsIndex];
  const jobSeekerData = state.jobSeekers[state.jobSeekersIndex];
  
  const jobListingsAPICall = () => {
    getUnmatchedJobListings(jobListingsAPI, matchesAPI).then(
      (unmatchedJobListing) => {
        setState({
          ...state,
          jobListings: unmatchedJobListing,
          jobListingsIndex: randomIndex(unmatchedJobListing),
        });
      }
    );
  };

  const jobSeekersAPICall = () => {
    getUnmatchedJobSeekers(jobSeekersAPI, matchesAPI).then(
      (unmatchedJobSeeker) => {
        setState({
          ...state,
          jobSeekers: unmatchedJobSeeker,
          jobSeekersIndex: randomIndex(unmatchedJobSeeker),
        });
      }
    );
  };

  const seekerInterested = () => {
    axios
      .post(matchesAPI, {
        // replace job_seeker_id with the user's id
        job_seeker_id: null,
        job_listing_id: jobListingData?.id,
        seeker_status: true,
        employer_status: false,
      })
      .then(() => {
        jobListingsAPICall();
      });
  };

  const employerInterested = () => {
    axios
      .post(matchesAPI, {
        // replace job_seeker_id with the user's id
        job_seeker_id: jobSeekerData?.id,
        job_listing_id: null,
        seeker_status: false,
        employer_status: true,
      })
      .then(() => {
        jobSeekersAPICall();
      });
  };

  // resets database -- remove before production
  const reset = (APICall) => {
    axios.get("api/debug/reset").then(() => APICall());
  };

  useEffect(() => {
    const fetchData = async () => {
      const unmatchedJobListings = await getUnmatchedJobListings(
        jobListingsAPI,
        matchesAPI
      );
      const unmatchedJobSeekers = await getUnmatchedJobSeekers(
        jobSeekersAPI,
        matchesAPI
      );

      setState((prevState) => ({
        ...prevState,
        jobListings: unmatchedJobListings,
        jobListingsIndex: randomIndex(unmatchedJobListings),
        jobSeekers: unmatchedJobSeekers,
        jobSeekersIndex: randomIndex(unmatchedJobSeekers),
      }));
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/job_listing"
          element={
            <JobListing
              data={jobListingData}
              interested={seekerInterested}
              notInterested={jobListingsAPICall}
              reset={() => reset(jobListingsAPICall)}
            />
          }
        />
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
