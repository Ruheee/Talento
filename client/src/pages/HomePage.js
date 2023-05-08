import React from 'react';
import '../styles/HomePage.scss';

const HomePage = () => {
  const backgroundImage = `${process.env.PUBLIC_URL}/Background.png`;
  const groupImage = `${process.env.PUBLIC_URL}/Group.png`;

  return (
    <div
      className="home-page-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="center-text">
        <h1 className="begin-journey-text">
          Unlock Your <span className="highlighted">Dream</span> job with a couple swipes
        </h1>
        <p className="description-text">
          Discover a world of opportunities with Talento, connecting job seekers and employers!
        </p>
      </div>
      <img src={groupImage} alt="Group" className="group-image" />
    </div>
  );
};

export default HomePage;
