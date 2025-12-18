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
          className="block aspect-square w-40 h-40 object-cover grayscale hover:grayscale-0 transition-[filter] duration-500 rounded-none"
          style={{
            border: "1px solid currentColor",
            boxShadow: "0 0 20px #6b7b6b",
            willChange: "filter",
          }}
        />
      </div>
    </div>
    
    <blockquote className="about-quote text-green-400/80 text-center italic mb-8">
      A 3rd-year Artificial Intelligence and Machine Learning student at IARE, Hyderabad, focused on the intersection of model development and scalable engineering. I prioritize consistency in my code and depth in my technical foundations.
    </blockquote>
    
    <div className="interest-section space-y-4">
      <div className="interest-item border border-green-400/30 rounded-lg p-4 flex items-start gap-3">
        <span className="text-green-400 text-2xl">🤖</span>
        <div>
          <div className="interest-title text-green-300 font-semibold">Agentic AI & GenAI</div>
          <div className="interest-description text-green-400/80">
            Exploring autonomous agent orchestration using LangChain and CrewAI, with a focus on Retrieval-Augmented Generation (RAG).
          </div>
        </div>
      </div>

      <div className="interest-item border border-green-400/30 rounded-lg p-4 flex items-start gap-3">
        <span className="text-green-400 text-2xl">⚙️</span>
        <div>
          <div className="interest-title text-green-300 font-semibold">MLOps & Orchestration</div>
          <div className="interest-description text-green-400/80">
            Practicing the containerization and deployment of ML models using Docker, Kubernetes (GKE), and CI/CD pipelines.
          </div>
        </div>
      </div>

      <div className="interest-item border border-green-400/30 rounded-lg p-4 flex items-start gap-3">
        <span className="text-green-400 text-2xl">🧩</span>
        <div>
          <div className="interest-title text-green-300 font-semibold">Algorithmic Problem Solving</div>
          <div className="interest-description text-green-400/80">
            Regularly refining logic and data structure skills through competitive programming, maintaining a consistent daily coding habit.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutTab;