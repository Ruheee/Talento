import React, { useState } from 'react';
import classNames from "classnames";
import { useSwipeable } from 'react-swipeable';
import '../styles/JobListing.scss';

const JobListing = (props) => {
  let hiddenClass = classNames({ hidden: props.data?.job_title === undefined });

  const [swiping, setSwiping] = useState('');
  const [enlarged, setEnlarged] = useState(false);  // new state for enlargement

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      console.log('Not Interested');
      props.notInterested();
      setSwiping('left');
      setTimeout(() => setSwiping(''), 1000);
    },
    onSwipedRight: () => {
      console.log('Interested');
      props.interested();
      setSwiping('right');
      setTimeout(() => setSwiping(''), 1000);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handleClick = () => {   // new handler for click event
    setEnlarged(!enlarged);
  };

  return (
    <div
      className="card-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Background.png)`,
      }}>
  
      <button className="star" onClick={props.reset}>
        Reset
      </button>
      <br />
  
      <div hidden={hiddenClass}>
        <div 
          className={`card-body ${swiping === 'right' ? 'swiping-right' : swiping === 'left' ? 'swiping-left' : ''} ${enlarged ? 'enlarge' : ''}`}
          {...handlers} 
          onClick={handleClick}
        >
          <img className="logo" src={props.data?.employer_logo} width={135} />
          <header className="job-title">{props.data?.job_title}</header>
          <header className="company-name">{props.data?.employer_name}</header>
          <section className="content-header">About the job</section>
          <article className="content-body">{props.data?.job_description}</article>
          <div className="row-container">
            <div>
              <section className="content-header">Salary</section>
              <article className="content-body">${props.data?.salary}</article>
              <section className="content-header">Skills</section>
              <article className="content-body">{props.data?.skills}</article>
            </div>
            <div>
              <section className="content-header">Location</section>
              <article className="content-body">
                {props.data?.city}, {props.data?.country}
              </article>
              <section className="content-header">Date Posted</section>
              <article className="content-body">{props.data?.date_posted}</article>
            </div>
          </div>
  
          <div className="action-buttons">
            <button 
              className="not-interested" 
              onClick={(e) => {
                e.stopPropagation();
                props.notInterested();
              }}
            >
              Not Interested
            </button>
            <button 
              className="star"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <i className="fas fa-star fa-lg"></i>
            </button>
            <button 
              className="interested" 
              onClick={(e) => {
                e.stopPropagation();
                props.interested();
              }}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
  
      <div hidden={!hiddenClass}>
        <div className="card-body">
          <img
            className="no-more"
            src={`${process.env.PUBLIC_URL}/NoMore.png`}
          />
        </div>
      </div>
    </div>
  );
}


export default JobListing;
