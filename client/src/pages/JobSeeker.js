import React from 'react';
import classNames from "classnames";
import '../styles/JobSeeker.scss';
  
const JobSeeker = (props) => {
  let hiddenClass = classNames({ hidden: props.data?.first_name === undefined });
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

      {/* show no more card if there are no more cards to show or if first_name is undefined */}
      <div hidden={hiddenClass}>
        <div className="card-body">
          <img
            className="profile"
            src={props.data?.avatar}
            width={135}
          />
          <header className="seeker-name">{props.data?.first_name} {props.data?.last_name}</header>
          <header className="seeker-location">{props.data?.city}, {props.data?.country}</header>
          <section className="subheader">About Me</section>
          <div className="content-container">
            <article className="content-body">
            {props.data?.about_me}
            </article>
            <section className="subheader">Skills</section>
            <article className="content-body">
            {props.data?.skills}
            </article>
            <section className="subheader">Resume</section>
            <article className="content-body">
            {props.data?.resume}
            </article>
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

      {/* show no more card if there are no more cards to show or if first_name is undefined */}
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
  
export default JobSeeker;
