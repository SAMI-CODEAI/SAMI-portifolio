import React from "react";

const projectList = [
  {
    title: "AggieMate – Chrome Extension for UC Davis Schedule Builder",
    description: "Shipped Chrome extension with 200+ installs improving class planning.",
    tags: ["JavaScript", "Chrome Extensions", "UI/UX Design", "API Integration"],
    icon: "🌱"
  },
  {
    title: "China's Rise: Economic Opportunity or Threat to the US?",
    description: "Comprehensive analysis exploring China's rapid growth and its implications.",
    tags: ["Python", "Data Analysis", "Economic Research", "Visualization"],
    icon: "📊"
  },
  {
    title: "Portfolio Website",
    description: "Interactive React portfolio with terminal aesthetic and smooth animations.",
    tags: ["React", "TypeScript", "CSS3", "Web Design"],
    icon: "💻"
  }
];

const ProjectsTab: React.FC = () => (
  <div className="space-y-6">
    <div className="tab-content-header">
      <h2>projects</h2>
    </div>
    
    <div className="space-y-4">
      {projectList.map((proj, idx) => (
        <div key={idx} className="project-card">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-green-400 text-xl">{proj.icon}</span>
            <h3 className="text-green-300 font-semibold flex-1">{proj.title}</h3>
          </div>
          <p className="text-green-400/80 mb-4 pl-8">{proj.description}</p>
          <div className="flex gap-2 flex-wrap pl-8">
            {proj.tags.map((tag, i) => (
              <span key={i} className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProjectsTab;