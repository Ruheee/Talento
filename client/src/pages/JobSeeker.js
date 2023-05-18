import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../styles/JobSeeker.scss';

import classNames from "classnames";
import { useSwipeable } from 'react-swipeable';
import ReactConfetti from 'react-confetti';
import ConfettiExplosion from "react-confetti-explosion";

import Match from "../components/Match";
import {
  getUnmatchedJobSeekers,
  randomIndex,
} from "../helpers/selectors";

const JobSeeker = () => {
  const [state, setState] = useState({
    jobSeekers: {},
    jobSeekersIndex: 0,
  });

  const [isLoading, setIsLoading] = useState(true);

  const [match, setMatch] = useState({
    fadeOut: false,
    visible: false,
  });

  const [swiping, setSwiping] = useState("");
  const [enlarged, setEnlarged] = useState(false); // new state for enlargement

  const jobSeekersAPI = "/api/job_seekers";
  const matchesAPI = "/api/matches";

  const jobSeeker = state.jobSeekers[state.jobSeekersIndex];

  const isHidden = jobSeeker?.first_name === undefined && "hidden";
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

  const loadJobSeekers = () => {
    getUnmatchedJobSeekers(jobSeekersAPI, matchesAPI).then(
      (unmatchedJobSeeker) => {
        setState((prev) => ({
          ...prev,
          jobSeekers: unmatchedJobSeeker,
          jobSeekersIndex: randomIndex(unmatchedJobSeeker),
        }));
      }
    );
  };

  const isInterested = () => {
    axios
      .post(matchesAPI, {
        // replace *_id with the user's id
        job_seeker_id: jobSeeker?.id,
        job_listing_id: null,
        seeker_status: null,
        employer_status: true,
      })
      .then(() => {
        axios.get(matchesAPI).then((response) => {
          const filtered = response.data.filter(
            (match) => match.job_seeker_id === jobSeeker?.id
          );
          const seeker_status = filtered[0].seeker_status;
          const employer_status = filtered[0].employer_status;

          // check if the job seeker and employer have both swiped right
          // then show the match popup
          //otherwise rerender the page and show the next job listing
          if (seeker_status === "true" && employer_status === "true") {
            showMatch();
            loadJobSeekers();
          } else {
            loadJobSeekers();
          }
        });
      });
  };

    // resets database -- remove before production
    const resetDB = () => {
      axios.get("api/debug/reset").then(() => loadJobSeekers());
    };
  
    const handlers = useSwipeable({
      onSwipedLeft: () => {
        console.log("Not Interested");
        loadJobSeekers();
        setSwiping("left");
        setTimeout(() => setSwiping(""), 1000);
      },
      onSwipedRight: () => {
        console.log("Interested");
        isInterested();
        setSwiping("right");
        setTimeout(() => setSwiping(""), 1000);
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
        const unmatchedJobSeekers = await getUnmatchedJobSeekers(
          jobSeekersAPI,
          matchesAPI
        );
  
        setState((prev) => ({
          ...prev,
          jobSeekers: unmatchedJobSeekers,
          jobSeekersIndex: randomIndex(unmatchedJobSeekers),
        }));
        
        setIsLoading(false);
      };
  
      fetchData();
    }, []);
  
  return (
    <div>
      {isLoading ? <div>{/*insert progress indicator here*/}</div> :
        <div
          className="card-container"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/Background.png)`,
          }}>
      
          {/* resets database -- remove before production */}
          <button className="star" onClick={resetDB} hidden={!isHidden}>
            Reset
          </button>
          <br />

          {/* show no more card if there are no more cards to show or if first_name is undefined */}
          <div hidden={isHidden}>
            <div className={`card-body ${
              swiping === "right"
                ? "swiping-right"
                : swiping === "left"
                ? "swiping-left"
                : ""
              } ${enlarged ? "enlarge" : ""}`}
              {...handlers}
              onClick={handleClick}>
              <img
                className="profile"
                src={jobSeeker?.avatar}
                width={135}
              />
              <header className="seeker-name">{jobSeeker?.first_name} {jobSeeker?.last_name}</header>
              <header className="seeker-location">{jobSeeker?.city}, {jobSeeker?.country}</header>
              <section className="subheader">About Me</section>
              <div className="content-container">
              {match.visible && (
                  <ConfettiExplosion
                    force={0.8}
                    duration={5000}
                    particleCount={400}
                    width={1500}
                  />
                )}
                <article className="content-body">
                  {jobSeeker?.about_me}
                </article>
                <section className="subheader">Skills</section>
                <article className="content-body">
                  {jobSeeker?.skills}
                </article>
                <section className="subheader">Resume</section>
                <article className="content-body">
                  {jobSeeker?.resume}
                </article>
              </div>
            </div>

            <div className="action-buttons">
              <button className="not-interested" onClick={(e) => {
                e.stopPropagation();
                loadJobSeekers();
              }}>
                Not Interested
              </button>
              <button className="interested" onClick={(e) => {
                e.stopPropagation();
                isInterested();
              }}>
                Interested
              </button>
            </div>
          </div>

          {/* show no more card if there are no more cards to show or if first_name is undefined */}
          <div hidden={!isHidden}>
            <div className="card-body">
              <img
                className="no-more"
                src={`${process.env.PUBLIC_URL}/NoMore.png`}
              />
            </div>
          </div>
          <div className={matchContainerClass}>
          {match.visible && (
            <ReactConfetti
              width={window.innerWidth}
              height={window.innerHeight}
              numberOfPieces={150}
            />
          )}
          <Match swipeRight={showMatch} avatar={jobSeeker?.avatar} />
        </div>
        </div>}
      </div>
  );
};
  
export default JobSeeker;
