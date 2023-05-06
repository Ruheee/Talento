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
          <section className='about'>About the job</section>
          <article className='company-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget quam sodales, porta libero quis, sollicitudin massa. Nam ornare, dui ac hendrerit posuere, sapien justo mollis mi, eget hendrerit tortor augue in risus. Ut quis mauris eros. Sed rhoncus nisl non urna accumsan pharetra. Aliquam vel pulvinar libero.
            <br />
            <br />
            Phasellus congue commodo libero a fringilla. Curabitur magna leo, sodales in dolor sed, blandit varius neque. Duis blandit lectus a augue congue, vel lobortis erat vestibulum. Proin a arcu id tortor accumsan tincidunt ac eu erat. Aliquam sit amet eros eu felis faucibus pulvinar. Vestibulum aliquam, ipsum ullamcorper blandit dictum, enim purus facilisis purus, id elementum erat massa a enim.
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
