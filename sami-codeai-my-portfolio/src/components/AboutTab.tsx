import React from "react";

const AboutTab: React.FC = () => (
  <div className="about-content">
    <div className="about-header">
      <h2>about me</h2>
    </div>
    
    <blockquote className="about-quote">
      I'm an engineer. Plain and simple, I like to solve problems and build things that actually make a difference.
    </blockquote>
    
    <div className="interest-section">
      <div className="interest-item">
        <div className="interest-title">Sports & Athletics</div>
        <div className="interest-description">
          MMA training, archery, and competitive athletics
        </div>
      </div>

      <div className="interest-item">
        <div className="interest-title">My Art</div>
        <div className="interest-description">
          Crosshatch pen drawings from my sketchbook
        </div>
      </div>
    </div>
  </div>
);

export default AboutTab;