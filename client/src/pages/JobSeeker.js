import React from 'react';
import '../styles/JobSeeker.scss';
  
const JobSeeker = () => {
  return (
    <div
    className="card-container"
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/Background.png)`,
    }}
    >
      <div>
        <div className="card-body">
          <img className="profile" src={`${process.env.PUBLIC_URL}/profile-placeholder.png`} width={135} />
          <header className='seeker-name'>John Doe</header>
          <header className='seeker-location'>Toronto, ON</header>
          <section className='subheader'>About Me</section>
          <div className='content-container'>
            <article className='content-body'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget quam sodales, porta libero quis, sollicitudin massa. Nam ornare, dui ac hendrerit posuere, sapien justo mollis mi, eget hendrerit tortor augue in risus. Ut quis mauris eros. Sed rhoncus nisl non urna accumsan pharetra. Aliquam vel pulvinar libero.
            </article>
            <section className='subheader'>Skills</section>
            <article className='content-body'>
              Lorem ipsum dolor sit amet
            </article>
            <section className='subheader'>Resume</section>
            <article className='content-body'>
            {"<"}insert link{">"}
            </article>
          </div>
        </div>
        <div className='action-buttons'>
          <button className='not-interested'>Not Interested</button>
          <button className='star'><i class="fas fa-star fa-lg" ></i></button>
          <button className='interested'>Interested</button>
        </div>
      </div>
    </div>
  );
};
  
export default JobSeeker;
