import React from 'react';
import './JobListing.css';
  
const JobListing = () => {
  return (
    <div
    className="card-container"
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/Background.png)`,
    }}
    >
      <div>
        <div className="card-body">
          <img className="logo" src={`${process.env.PUBLIC_URL}/logo-placeholder.png`} width={135} />
          <header className='job-title'>Job Title</header>
          <header className='company-name'>Company Name</header>
          <section className='content-header'>About the job</section>
          <article className='content-body'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Venenatis tellus in metus vulputate eu scelerisque.
            <br />
            <br />
            Enim tortor at auctor urna nunc id cursus metus aliquam. Aliquet risus feugiat in ante metus. Sed augue lacus viverra vitae congue eu consequat ac felis. Volutpat blandit aliquam etiam erat velit scelerisque in. Consequat mauris nunc congue nisi vitae suscipit tellus mauris.
          </article>
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
  
export default JobListing;
