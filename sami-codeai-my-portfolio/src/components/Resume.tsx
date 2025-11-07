import React from "react";

const Resume: React.FC = () => (
  <div className="content-section">
    <h2 className="section-header">resume</h2>
    
    <div className="space-y-4">
      <div className="text-center">
        <iframe
          src="/assets/Samiksha-Resume.pdf"
          title="Samiksha Resume"
          className="w-full h-[600px] border border-[#2a2a2a] rounded bg-white"
        />
      </div>
      
      <div className="text-center">
        <a
          href="/assets/Samiksha-Resume.pdf"
          download
          className="inline-block px-6 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded text-[#a8b5a8] hover:bg-[#252525] transition-all"
        >
          Download PDF
        </a>
      </div>
    </div>
  </div>
);

export default Resume;