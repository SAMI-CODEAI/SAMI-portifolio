import React from "react";

const AboutTab: React.FC = () => (
  <div className="about-content p-6">
    <div className="about-header">
      <h2 className="text-green-300">about me</h2>
    </div>
    
    {/* Profile Image */}
    <div className="flex justify-center my-6">
      <div className="relative">
        <img
          src="/assets/sami.png"
          alt="Samiksha"
          className="rounded-xl w-48 h-48 object-cover shadow-lg"
          style={{
            boxShadow: "0 0 15px 3px rgba(74, 222, 128, 0.4)",
          }}
        />
      </div>
    </div>
    
    <blockquote className="about-quote text-green-400/80 text-center italic mb-8">
      I'm a computer science student specializing in AI and Machine Learning. I build intelligent systems that solve real-world problems and make an impact.
    </blockquote>
    
    <div className="interest-section space-y-4">
      <div className="interest-item border border-green-400/30 rounded-lg p-4 flex items-start gap-3">
        <span className="text-green-400 text-2xl">🤖</span>
        <div>
          <div className="interest-title text-green-300 font-semibold">AI Agent Development</div>
          <div className="interest-description text-green-400/80">
            Building production-ready agents with LangChain, Crew AI, and OpenAI SDK
          </div>
        </div>
      </div>

      <div className="interest-item border border-green-400/30 rounded-lg p-4 flex items-start gap-3">
        <span className="text-green-400 text-2xl">🧠</span>
        <div>
          <div className="interest-title text-green-300 font-semibold">Deep Learning & ML</div>
          <div className="interest-description text-green-400/80">
            Creating models with TensorFlow, PyTorch, and deploying with Docker & Kubernetes
          </div>
        </div>
      </div>

      <div className="interest-item border border-green-400/30 rounded-lg p-4 flex items-start gap-3">
        <span className="text-green-400 text-2xl">💻</span>
        <div>
          <div className="interest-title text-green-300 font-semibold">Full-Stack Development</div>
          <div className="interest-description text-green-400/80">
            React, Flask, Node.js - bringing ML models to life with seamless interfaces
          </div>
        </div>
      </div>

      <div className="interest-item border border-green-400/30 rounded-lg p-4 flex items-start gap-3">
        <span className="text-green-400 text-2xl">📊</span>
        <div>
          <div className="interest-title text-green-300 font-semibold">Problem Solving</div>
          <div className="interest-description text-green-400/80">
            150+ LeetCode problems and 60+ GeeksforGeeks challenges solved
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutTab;
