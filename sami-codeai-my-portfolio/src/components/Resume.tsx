import React from "react";

const Resume: React.FC = () => (
  <div className="flex flex-col items-center justify-center w-full min-h-screen bg-black text-green-400 p-6">
    <div className="tab-content-header mb-4">
      <h2 className="text-green-500">Resume</h2>
    </div>
    <div className="w-full flex justify-center">
      <iframe
        src="/assets/Samiksha-Resume.pdf"
        title="Samiksha Resume"
        width="90%"
        height="700px"
        className="border border-green-500 rounded-md shadow-lg bg-white"
      />
    </div>
    <div className="text-green-300 text-center mt-4">
      <a
        href="/assets/Samiksha-Resume.pdf"
        download
        className="underline hover:text-green-500"
      >
        Download PDF
      </a>
    </div>
  </div>
);

export default Resume;
