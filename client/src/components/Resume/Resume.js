import React from "react";
import "./Resume.css";

const Resume = (props) => {
  const avatar = `${process.env.PUBLIC_URL}/avatar.jpg`;
  const lighthouse = `${process.env.PUBLIC_URL}/lighthouselabs.jpeg`;
  const apple = `${process.env.PUBLIC_URL}/Apple.png`;
  const facebook = `${process.env.PUBLIC_URL}/Facebook.png`;
  const google = `${process.env.PUBLIC_URL}/Google.png`;
  const rbc = `${process.env.PUBLIC_URL}/Royal-Bank-of-Canada-Logo.png`;
  const talento = `${process.env.PUBLIC_URL}/Talento.png`;

  return (
    <div className="main-container">
      <div className="sidebar">
        <div className="sidebar-item-logo">
          <img src={talento} className="sidebar-logo"></img>
          <span className="sidebar-icon-label">Talento</span>
        </div>
        <div className="sidebar-item">
          <i class="fas fa-edit sidebar-icons"></i>
          <span className="sidebar-icon-label">Edit</span>
        </div>
        <div className="sidebar-item">
          <i class="far fa-save sidebar-icons"></i>
          <span className="sidebar-icon-label">Save</span>
        </div>
        <div className="sidebar-item">
          <i class="fas fa-cloud-download-alt sidebar-icons"></i>
          <span className="sidebar-icon-label">Download</span>
        </div>
      </div>
      <div className="profile-container">
        <div className="basic-info-container">
          <div>
            <span className="resume-header">JOHN DOE</span>
            <p className="job-title-header">Full Stack Developer</p>
          </div>
          <div className="info-avatar">
            <div>
              <div className="subcontainer">
                <i class="fas fa-envelope-open-text info-icons"></i>
                <span className="info-header">jobseeker.talento@gmail.com</span>
              </div>
              <div className="subcontainer">
                <i class="fas fa-phone-volume info-icons"></i>
                <span className="info-header">777-888-9999</span>
              </div>
              <div className="subcontainer">
                <i class="fas fa-map-marker-alt info-icons"></i>
                <span className="info-header">Toronto, ON</span>
              </div>
            </div>
            <div>
              <img src={avatar} className="resume-picture"></img>
            </div>
          </div>
        </div>
        <div className="basic-info-container">
          <span className="name-header">SUMMARY</span>
          <p className="content">
            Experienced and accomplished Senior Web Developer with a proven
            track record of delivering high-quality web solutions. Demonstrated
            expertise in full-stack development, leading cross-functional teams,
            and collaborating with stakeholders to drive successful project
            outcomes. Skilled in implementing cutting-edge technologies,
            optimizing performance, and ensuring scalability.
          </p>
        </div>
        <div className="basic-info-container">
          <span className="name-header">SKILLS</span>
          <p className="skills">
            <div>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Ruby on Rails</li>
                <li>Python</li>
                <li>Java</li>
                <li>C#</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>MongoDB</li>
                <li>ASP.net</li>
                <li>AWS</li>
                <li>Azure</li>
              </ul>
            </div>
          </p>
        </div>
        <div className="basic-info-container">
          <span className="name-header">EDUCATION</span>
          <br />
          <div className="education-container">
            <img src={lighthouse} className="education-avatar"></img>
            <div>
              <p className="content-2">
                <strong>Diploma in Web Development</strong>, Lighthouse Labs
              </p>
              <p className="content-2">October 2022 - May 2023</p>
            </div>
          </div>
        </div>
        <div className="work-experience-container">
          <span className="name-header">WORK EXPERIENCE</span>
          <br />
          <div className="work-experience-flex-container">
            <div>
              <div className="education-container">
                <img src={apple} className="education-avatar"></img>
                <div>
                  <p className="content-2">
                    <strong>Senior Web Developer</strong>, Apple
                  </p>
                  <p className="content-2">June 2019 - PRESENT</p>
                </div>
              </div>
              <br />
              <div className="education-container">
                <img src={facebook} className="education-avatar"></img>
                <div>
                  <p className="content-2">
                    <strong>UX Designer</strong>, Facebook
                  </p>
                  <p className="content-2">January 2015 - May 2019</p>
                </div>
              </div>
              <br />
            </div>
            <div>
              <div className="education-container">
                <img src={google} className="education-avatar"></img>
                <div>
                  <p className="content-2">
                    <strong>Quality Engineer</strong>, Google
                  </p>
                  <p className="content-2">July 2012 - December 2014</p>
                </div>
              </div>
              <br />
              <div className="education-container">
                <img src={rbc} className="education-avatar"></img>
                <div>
                  <p className="content-2">
                    <strong>Backend Developer</strong>, RBC
                  </p>
                  <p className="content-2">March 2010 - May 2012</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
