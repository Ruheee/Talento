import React from 'react';
  
const JobListing = () => {
  return (
    <div
    className="job_listing"
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/Background.png)`,
    }}
  >
      <br />
      <br />
      <br />
      <br />
      <h1>Welcome to Job Listing!</h1>
    </div>
  );
};
  
export default JobListing;
