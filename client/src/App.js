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
  const [state, setState] = useState({
    jobListings: {},
    jobListingsIndex: 0,
    jobSeekers: {},
    jobSeekersIndex: 0,
  });

  const jobListingAPI = "/api/job_listings";
  const jobSeekerAPI = "/api/job_seekers";

  const interested = (api, seeker=false, employer=false, query, index) => {
    axios
      .post("/api/matches", {
        // replace job_seeker_id with the user's id
        job_seeker_id: 1,
        job_listing_id: jobListingData?.id,
        seeker_status: seeker,
        employer_status: employer,
      })
      .then(() => {
        getUnmatchedItems(api, "/api/matches").then(
          (unmatchedItems) => {
            setState({
              ...state,
              [query]: unmatchedItems,
              [index]: randomIndex(unmatchedItems),
            });
          }
        );
      });
  };

  const notInterested = (api, query, index) => {
    getUnmatchedItems(api, "/api/matches").then(
      (unmatchedItems) => {
        setState({
          ...state,
          [query]: unmatchedItems,
          [index]: randomIndex(unmatchedItems),
        });
      }
    );
  };

  // resets database -- remove before production
  const reset = (api, query, index) => {
    axios.get("api/debug/reset").then(() => {
      getUnmatchedItems(api, "/api/matches").then(
        (unmatchedJobListings) => {
          setState({
            ...state,
            [query]: unmatchedJobListings,
            [index]: randomIndex(unmatchedJobListings),
          });
        }
      );
    });
  };

  const jobListingData = state.jobListings[state.jobListingsIndex];
  const jobSeekerData = state.jobSeekers[state.jobSeekersIndex];

  useEffect(() => {
    const fetchData = async () => {
      const unmatchedJobListings = await getUnmatchedItems(
        "/api/job_listings",
        "/api/matches"
      );
      const unmatchedJobSeekers = await getUnmatchedItems(
        "/api/job_seekers",
        "/api/matches"
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
              interested={() => interested(jobListingAPI, true, false, "jobListings", "jobListingsIndex")}
              notInterested={() => notInterested(jobListingAPI, "jobListings", "jobListingsIndex")}
              reset={() => reset(jobListingAPI, "jobListings", "jobListingsIndex")}
            />
          }
        />
        <Route
          path="/job_seeker"
          element={
            <JobSeeker
              data={jobSeekerData}
              interested={() => interested(jobSeekerAPI, false, true, "jobSeekers", "jobSeekersIndex")}
              notInterested={() => notInterested(jobSeekerAPI, "jobSeekers", "jobSeekersIndex")}
              reset={() => reset(jobSeekerAPI, "jobSeekers", "jobSeekersIndex")}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}


export default App;
