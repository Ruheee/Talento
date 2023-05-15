import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../styles/JobListing.scss';

const JobListing = (props) => {
  const [swiping, setSwiping] = useState('');

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      console.log('Not Interested');
      setSwiping('left');
      setTimeout(() => setSwiping(''), 1000);
    },
    onSwipedRight: () => {
      console.log('Interested');
      setSwiping('right');
      setTimeout(() => setSwiping(''), 1000);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div
      className="card-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Background.png)`,
        transition: 'transform 0.3s ease-out'
      }}
    >
      <div
        className={`card-body ${swiping === 'right' ? 'swiping-right' : ''} ${swiping === 'left' ? 'swiping-left' : ''}`} {...handlers}
      >
        <img className="logo" src={`${process.env.PUBLIC_URL}/logo-placeholder.png`} width={135} />
        <header className='job-title'>{props.jobTitle}</header>
        <header className='company-name'>{props.employer}</header>
        <section className='content-header'>About the job</section>
        <article className='content-body'>{props.jobDescription}</article>
        <div className='row-container'>
          <div>
            <section className='content-header'>Salary</section>
            <article className='content-body'>
              ${props.salary}
            </article>
            <section className='content-header'>Skills</section>
            <article className='content-body'>
              {props.skills}
            </article>
          </div>
          <div>
            <section className='content-header'>Location</section>
            <article className='content-body'>
              {props.city}, {props.country}
            </article>
            <section className='content-header'>Date Posted</section>
            <article className='content-body'>
              {props.datePosted}
            </article>
          </div>
        </div>
      </div>
      <div className='action-buttons'>
        <button className='not-interested'>Not Interested</button>
        <button className='star'><i className="fas fa-star fa-lg" ></i></button>
        <button className='interested'>Interested</button>
      </div>
    </div>
  );
};

export default JobListing;
