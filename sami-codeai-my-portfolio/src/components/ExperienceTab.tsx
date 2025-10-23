// Example for ExperienceTab.tsx
import React from "react";

const ExperienceTab: React.FC = () => (
  <div className="about-content">
    <div className="about-header">
      <h2>experience</h2>
    </div>
    
    <div className="space-y-4">
      <div className="experience-item">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-green-400">💼</span>
          <h3 className="text-green-300 font-semibold">Quantitative Analyst @ Societe Generale</h3>
        </div>
        <div className="text-green-400/70 text-sm mb-3 pl-8">2023 - Present</div>
        <p className="text-green-400/80 mb-3 pl-8">
          Developed trading algorithms and risk models for quantitative finance strategies.
        </p>
        <div className="flex gap-2 flex-wrap pl-8">
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">Python</span>
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">Machine Learning</span>
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">Financial Modeling</span>
        </div>
      </div>

      <div className="experience-item">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-green-400">🎓</span>
          <h3 className="text-green-300 font-semibold">Research Assistant @ UC Davis</h3>
        </div>
        <div className="text-green-400/70 text-sm mb-3 pl-8">2022 - 2023</div>
        <p className="text-green-400/80 mb-3 pl-8">
          Conducted research in machine learning applications for computational statistics.
        </p>
        <div className="flex gap-2 flex-wrap pl-8">
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">Research</span>
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">Data Analysis</span>
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">Python</span>
        </div>
      </div>
    </div>
  </div>
);

export default ExperienceTab;