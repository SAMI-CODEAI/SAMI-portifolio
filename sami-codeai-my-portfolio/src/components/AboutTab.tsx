import React from "react";
import samiImage from "../assets/sami.png";  // Import the image

const AboutTab: React.FC = () => (
  <div className="about-content p-6">
    <div className="about-header">
      <h2>about me</h2>
    </div>
    
    {/* Profile Image */}
    <div className="flex justify-center my-6">
      <img 
        src={samiImage}   // Use the imported variable
        alt="Samiksha Sai Thogeti" 
        className="w-32 h-32 rounded-lg object-cover border-2 border-terminal/30"
      />
    </div>
    
    <blockquote className="about-quote">
      I'm a computer science student specializing in AI and Machine Learning. I build intelligent systems that solve real-world problems and make an impact.
    </blockquote>
    
    {/* <div className="interest-section"> */}
    <div className="interest-section space-y-4">
      <div className="interest-item bg-black/40 border border-terminal/30 rounded-lg p-4 flex items-start gap-3">
        <span className="text-terminal text-2xl">🤖</span>
        <div>
          <div className="interest-title">AI Agent Development</div>
          <div className="interest-description">
            Building production-ready agents with LangChain, Crew AI, and OpenAI SDK
          </div>
        </div>
      </div>

      <div className="interest-item bg-black/40 border border-terminal/30 rounded-lg p-4 flex items-start gap-3">
        <span className="text-terminal text-2xl">🧠</span>
        <div>
          <div className="interest-title">Deep Learning & ML</div>
          <div className="interest-description">
            Creating models with TensorFlow, PyTorch, and deploying with Docker & Kubernetes
          </div>
        </div>
      </div>

      <div className="interest-item bg-black/40 border border-terminal/30 rounded-lg p-4 flex items-start gap-3">
        <span className="text-terminal text-2xl">💻</span>
        <div>
          <div className="interest-title">Full-Stack Development</div>
          <div className="interest-description">
            React, Flask, Node.js - bringing ML models to life with seamless interfaces
          </div>
        </div>
      </div>

      <div className="interest-item bg-black/40 border border-terminal/30 rounded-lg p-4 flex items-start gap-3">
        <span className="text-terminal text-2xl">📊</span>
        <div>
          <div className="interest-title">Problem Solving</div>
          <div className="interest-description">
            150+ LeetCode problems and 60+ GeeksforGeeks challenges solved
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutTab;
