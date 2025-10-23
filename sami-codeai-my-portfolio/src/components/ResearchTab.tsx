import React from "react";

const ResearchTab: React.FC = () => (
  <div className="space-y-6">
    <div className="tab-content-header">
      <h2>research</h2>
    </div>
    
    <div className="space-y-4">
      <div className="research-item">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-green-400">🔬</span>
          <h3 className="text-green-300 font-semibold">Machine Learning in Computational Statistics</h3>
        </div>
        <div className="text-green-400/70 text-sm mb-3 pl-8 italic">Computer Science & Statistics</div>
        <p className="text-green-400/80 mb-3 pl-8">
          Exploring novel applications of machine learning algorithms in statistical modeling and data analysis.
        </p>
        <div className="flex gap-2 flex-wrap pl-8">
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">Machine Learning</span>
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">Statistics</span>
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">Python</span>
        </div>
      </div>

      <div className="research-item">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-green-400">📈</span>
          <h3 className="text-green-300 font-semibold">Quantitative Finance Models</h3>
        </div>
        <div className="text-green-400/70 text-sm mb-3 pl-8 italic">Financial Mathematics</div>
        <p className="text-green-400/80 mb-3 pl-8">
          Developing and analyzing quantitative models for financial markets and risk assessment.
        </p>
        <div className="flex gap-2 flex-wrap pl-8">
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">Finance</span>
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">Risk Analysis</span>
          <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">Algorithms</span>
        </div>
      </div>
    </div>
  </div>
);

export default ResearchTab;