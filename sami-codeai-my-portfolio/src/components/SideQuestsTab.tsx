import React from "react";

const SideQuestsTab: React.FC = () => (
  <div className="space-y-6">
    <div className="tab-content-header">
      <h2>side quests</h2>
    </div>
    
    <div className="space-y-4">
      <div className="sidequest-item">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-green-400">🥋</span>
          <h3 className="text-green-300 font-semibold">MMA & Combat Sports</h3>
        </div>
        <p className="text-green-400/80 pl-8">
          Training in mixed martial arts, focusing on Brazilian Jiu-Jitsu and Muay Thai. Competitive athletics and physical conditioning.
        </p>
      </div>

      <div className="sidequest-item">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-green-400">🎨</span>
          <h3 className="text-green-300 font-semibold">Pen & Ink Art</h3>
        </div>
        <p className="text-green-400/80 pl-8">
          Creating detailed crosshatch pen drawings in my sketchbook. Exploring themes of technology, nature, and abstract concepts.
        </p>
      </div>

      <div className="sidequest-item">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-green-400">🏹</span>
          <h3 className="text-green-300 font-semibold">Archery</h3>
        </div>
        <p className="text-green-400/80 pl-8">
          Precision archery training. Focus on traditional recurve bow techniques and mental discipline.
        </p>
      </div>
    </div>
  </div>
);

export default SideQuestsTab;