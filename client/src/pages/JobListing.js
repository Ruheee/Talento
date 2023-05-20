import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../styles/JobListing.scss';

import classNames from "classnames";
import { useSwipeable } from 'react-swipeable';
import ReactConfetti from 'react-confetti';
import ConfettiExplosion from "react-confetti-explosion";

import Match from "../components/Match";
import { getUnmatchedJobListings } from "../helpers/selectors";

const JobListing = () => {
  const [state, setState] = useState({
    jobListings: {},
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [avatar, setAvatar] = useState(""); // new state for avatar
  const [match, setMatch] = useState({
    fadeOut: false,
    visible: false,
  });

  const [swiping, setSwiping] = useState("");
  const [enlarged, setEnlarged] = useState(false); // new state for enlargement

  const jobListingsAPI = "/api/job_listings";
  const matchesAPI = "/api/matches";

  const jobListing = state.jobListings[0];

  const isHidden = jobListing?.job_title === undefined && "hidden";
  const matchContainerClass = classNames(
    "match-popup",
    { hidden: !match.visible },
    { "fade-out": match.fadeOut }
  );

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
          jobListings: unmatchedJobListing
        }));
      }
      );
    };
    
    const isNotInterested = () => {
      axios
      .post(matchesAPI, {
        // replace *_id with the user's id
        job_seeker_id: null,
        job_listing_id: jobListing?.id,
        seeker_status: false,
        employer_status: null,
        not_interested: true
      })
        .then(() => {
          loadJobListings();
        });
      };
      
      const isInterested = () => {
        setAvatar(jobListing?.employer_logo)
        axios
        .post(matchesAPI, {
          // replace *_id with the user's id
          job_seeker_id: null,
          job_listing_id: jobListing?.id,
          seeker_status: true,
          employer_status: null,
          not_interested: false
        })
        .then(() => {
          axios.get(matchesAPI).then((response) => {
            const filtered = response.data.filter(
              (match) => match.job_listing_id === jobListing?.id
              );
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
    axios.get("api/debug/reset").then(() => {
      loadJobListings();
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setSwiping("left");
      setTimeout(() => {
        isNotInterested();
        setSwiping("");
      }, 1000);
    },
    onSwipedRight: () => {
      setSwiping("right");
      setTimeout(() => {
        isInterested();
        setSwiping("")
      }, 1000);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleClick = () => {
    // new handler for click event
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
      }));
      
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? <div>{/*insert progress indicator here*/}</div>
        : 
        <div
          className="card-container"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/Background.png)`,
          }}>
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
              <img
                className="logo"
                src={jobListing?.employer_logo}
                width={135}
              />
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
                  <article className="content-body">
                    {jobListing?.skills}
                  </article>
                </div>
                <div>
                  {match.visible && (
                    <ConfettiExplosion
                      force={0.8}
                      duration={5000}
                      particleCount={400}
                      width={1500}
                    />
                  )}
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
                  isNotInterested();
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
          <div className="reset-container">
            <button className="star" onClick={resetDB} hidden={!isHidden}>
              Reset
            </button>
          </div>
          </div>
          {/* resets database -- remove before production */}
          <div className={matchContainerClass}>
            {match.visible && (
              <ReactConfetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={150}
              />
            )}
            <Match swipeRight={showMatch} avatar={avatar} />
          </div>
        </div>}
    </div>
  );
}

export default JobListing;
