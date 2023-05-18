import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../styles/JobListing.scss';

import classNames from "classnames";
import { useSwipeable } from 'react-swipeable';
import ReactConfetti from 'react-confetti';

import Match from "../components/Match";
import {
  getUnmatchedJobListings,
  randomIndex,
} from "../helpers/selectors";

const JobListing = () => {
  const [state, setState] = useState({
   jobListings: {},
   jobListingsIndex: 0,
  });
  
  const [match, setMatch] = useState({
    fadeOut: false,
    visible: false
  });

  const [swiping, setSwiping] = useState('');
  const [enlarged, setEnlarged] = useState(false);  // new state for enlargement

  const jobListingsAPI = "/api/job_listings";
  const matchesAPI = "/api/matches";
  
  const jobListing = state.jobListings[state.jobListingsIndex];

  const isHidden = jobListing?.job_title === undefined && "hidden";
  
  const matchContainerClass = classNames("match-popup", {"hidden": !match.visible}, {"fade-out": match.fadeOut} );

  const showMatch = () => {
    if (match.visible) {
      setMatch((prev) => ({ ...prev, fadeOut: true }));
      setTimeout(() => {
        setMatch((prev) => ({ ...prev, visible: false }));
      }, 500);
    } else {
      setMatch({ visible: true, fadeOut: false });
    }
  };
  
  const loadJobListings = () => {
    getUnmatchedJobListings(jobListingsAPI, matchesAPI).then(
      (unmatchedJobListing) => {
        setState((prev) => ({
          ...prev,
          jobListings: unmatchedJobListing,
          jobListingsIndex: randomIndex(unmatchedJobListing),
        }));
      }
      );
    };
    
    const notInterested = () => loadJobListings();
    
    const isInterested = () => {
      axios
      .post(matchesAPI, {
        // replace job_seeker_id with the user's id
        job_seeker_id: null,
        job_listing_id: jobListing?.id,
        seeker_status: true,
        employer_status: true,
      })
      .then(() => {
        axios.get(matchesAPI).then((response) => { 
          const filtered = response.data.filter((match) => match.job_listing_id === jobListing?.id);
          const seeker_status = filtered[0].seeker_status;
          const employer_status = filtered[0].employer_status;
          
          // check if the job seeker and employer have both swiped right
          // then show the match popup 
          //otherwise rerender the page and show the next job listing
          if (seeker_status === "true" && employer_status === "true") {
            showMatch();
            loadJobListings();
          } else {
            loadJobListings();
          }
        });
      });
    };
    
    // resets database -- remove before production
    const resetDB = () => {
      axios.get("api/debug/reset").then(() => loadJobListings());
    };
    
    const handlers = useSwipeable({
      onSwipedLeft: () => {
        console.log('Not Interested');
        notInterested();
        setSwiping('left');
        setTimeout(() => setSwiping(''), 1000);
      },
      onSwipedRight: () => {
        console.log('Interested');
        isInterested();
        setSwiping('right');
        setTimeout(() => setSwiping(''), 1000);
      },
      preventDefaultTouchmoveEvent: true,
      trackMouse: true
    });
  
    const handleClick = () => {   // new handler for click event
      setEnlarged(!enlarged);
    };
  
    // GET request to the server to retrieve the job listings on page load
    useEffect(() => {
      const fetchData = async () => {
        const unmatchedJobListings = await getUnmatchedJobListings(
          jobListingsAPI,
          matchesAPI
          );
          
          setState((prev) => ({
            ...prev,
            jobListings: unmatchedJobListings,
            jobListingsIndex: randomIndex(unmatchedJobListings),
          }));
    };

    fetchData();
  }, []);

  return (
    <div>
      <div
        className="card-container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/Background.png)`,
        }}>
        <button className="star" onClick={resetDB} hidden={!isHidden}>
          Reset
        </button>
        <br />

        <div hidden={isHidden}>
          <div
            className={`card-body ${
              swiping === "right"
                ? "swiping-right"
                : swiping === "left"
                ? "swiping-left"
                : ""
            } ${enlarged ? "enlarge" : ""}`}
            {...handlers}
            onClick={handleClick}>
            <img className="logo" src={jobListing?.employer_logo} width={135} />
            <header className="job-title">{jobListing?.job_title}</header>
            <header className="company-name">
              {jobListing?.employer_name}
            </header>
            <section className="content-header">About the job</section>
            <article className="content-body">
              {jobListing?.job_description}
            </article>
            <div className="row-container">
              <div>
                <section className="content-header">Salary</section>
                <article className="content-body">
                  ${jobListing?.salary}
                </article>
                <section className="content-header">Skills</section>
                <article className="content-body">{jobListing?.skills}</article>
              </div>
              <div>
                <section className="content-header">Location</section>
                <article className="content-body">
                  {jobListing?.city}, {jobListing?.country}
                </article>
                <section className="content-header">Date Posted</section>
                <article className="content-body">
                  {jobListing?.date_posted}
                </article>
              </div>
            </div>

          </div>
            <div className="action-buttons">
              <button
                className="not-interested"
                onClick={(e) => {
                  e.stopPropagation();
                  notInterested();
                }}>
                Not Interested
              </button>
              <button
                className="interested"
                onClick={(e) => {
                  e.stopPropagation();
                  isInterested();
                }}>
                Interested
              </button>
            </div>
        </div>
        <div hidden={!isHidden}>
          <div className="card-body">
            <img
              className="no-more"
              src={`${process.env.PUBLIC_URL}/NoMore.png`}
            />
          </div>
        </div>
      </div>
      <div className={matchContainerClass}>
        {match.visible && (
          <ReactConfetti
            width={window.innerWidth}
            height={window.innerHeight}
          />
        )}
        <Match swipeRight={showMatch} />
      </div>
    </div>
  );
}


export default JobListing;
