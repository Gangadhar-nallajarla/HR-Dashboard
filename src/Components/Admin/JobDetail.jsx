import React from "react";
import "./JobDetail .css";

const JobDetails = () => {
  return (
    <div className="job-details-container">
      <div className="job-card">
        <header className="job-header">
          <div className="job-header-text">
            <h1 className="job-title">Senior React Developer</h1>
            <p className="company-name">DhaTvi Business Solutions Pvt Ltd</p>
            <div className="meta-info">
              <span>📍 Hyderabad, India</span>
              <span>💼 Full-time</span>
              <span>💰 ₹15–25 LPA</span>
            </div>
          </div>
          <button className="apply-btn">Apply Now</button>
        </header>

        <section className="job-section">
          <h2>Job Description</h2>
          <p>
            We are looking for an experienced React Developer to design and
            build scalable, high-performing web applications. The ideal
            candidate is passionate about clean code, reusable components, and
            high-quality UI experiences.
          </p>
        </section>

        <section className="job-section">
          <h2>Responsibilities</h2>
          <ul>
            <li>Build dynamic and responsive UIs using React.js.</li>
            <li>Work closely with designers and backend developers.</li>
            <li>Ensure cross-browser compatibility and performance.</li>
            <li>Write reusable and optimized front-end components.</li>
            <li>Participate in code reviews and mentoring.</li>
          </ul>
        </section>

        <section className="job-section">
          <h2>Required Skills</h2>
          <div className="skills">
            <span>React.js</span>
            <span>JavaScript (ES6+)</span>
            <span>Redux Toolkit</span>
            <span>Tailwind CSS</span>
            <span>REST APIs</span>
            <span>Git / GitHub</span>
            <span>Webpack / Vite</span>
          </div>
        </section>

        <section className="job-section">
          <h2>Why Join Us?</h2>
          <p>
            Be part of a forward-thinking engineering team that values
            creativity, innovation, and continuous learning. We offer flexible
            work arrangements, mentorship, and opportunities to work on global
            projects.
          </p>
        </section>
      </div>
    </div>
  );
};

export default JobDetails;
