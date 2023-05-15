import React from 'react';
import classNames from "classnames";
import '../styles/JobListing.scss';
  
const JobListing = (props) => {
  let hiddenClass = classNames({ hidden: props.data?.job_title === undefined });

  console.log(props.data?.employer_logo)
  return (
    <div
      className="card-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Background.png)`,
      }}>
      
      {/* resets database -- remove before production */}
      <button className="star" onClick={props.reset}>
        Reset
      </button>
      <br />

      {/* hide card if there are no more cards to show or if job_title is undefined */}
      <div hidden={hiddenClass}>
        <div className="card-body">
          <img
            className="logo"
            src={props.data?.employer_logo}
            width={135}
          />
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
        </div>

        <div className="action-buttons">
          <button className="not-interested" onClick={props.notInterested}>
            Not Interested
          </button>
          <button className="star">
            <i className="fas fa-star fa-lg"></i>
          </button>
          <button className="interested" onClick={props.interested}>
            Interested
          </button>
        </div>
      </div>

      {/* show no more card if there are no more cards to show or if job_title is undefined */}
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
};
  
export default JobListing;


  // const jobTitle = data?.job_title;
  // const jobDescription = data?.job_description;
  // const city = data?.city;
  // const country = data?.country;
  // const salary = data?.salary;
  // const skills = data?.skills;
  // const datePosted = data?.date_posted;
  // const employer = data?.employer_name;
