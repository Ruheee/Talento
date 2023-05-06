import React from 'react';
import './JobListing.css';
  
const JobListing = () => {
  return (
    <div
    className="job-listing-container"
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/Background.png)`,
    }}
  >
      <div className="card">
        <img className="logo" src={`${process.env.PUBLIC_URL}/logo192.png`} width={135}/>
      </div>
    </div>
  );
};
  
export default JobListing;
