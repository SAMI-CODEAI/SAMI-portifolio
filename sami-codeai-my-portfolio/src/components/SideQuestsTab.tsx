import React, { useState } from "react";

const QUICK_LINKS = [
  { label: "GitHub", url: "https://github.com/SAMI-CODEAI" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/samiksha-sai-thogeti-098303298/" },
  { label: "LeetCode", url: "https://leetcode.com/u/sami_codeai/" },
  { label: "Kaggle", url: "https://www.kaggle.com/samikshasaithogeti" },
  { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user/samicoo89g/" },
];

const SideQuestsTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="tab-content-header">
        <h2 className="text-green-300"></h2>
      </div>

      <div className="links-panel p-4 border border-green-500/20 rounded-lg">
        <p className="text-green-400/80 mb-3">Quick links to my developer profiles and contact:</p>
        <ul className="space-y-2">
          {QUICK_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 hover:text-green-100 underline"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="mailto:samiksha.thogeti@gmail.com" className="text-green-200 hover:text-green-100 underline">Email: samiksha.thogeti@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideQuestsTab;