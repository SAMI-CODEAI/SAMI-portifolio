import React, { useState, useEffect } from "react";
import MainWindow from "./MainWindow";
import TabWindow from "./TabWindow";
import ProjectsTab from "./ProjectsTab";
import AboutTab from "./AboutTab";
import ExperienceTab from "./ExperienceTab";
import SideQuestsTab from "./SideQuestsTab";
import ContactTab from "./ContactTab";
import ResearchTab from "./ResearchTab";

type TabType = 'projects' | 'about' | 'experience' | 'sidequests' | 'contact' | 'research';

const tabComponents = {
  projects: ProjectsTab,
  about: AboutTab,
  experience: ExperienceTab,
  sidequests: SideQuestsTab,
  contact: ContactTab,
  research: ResearchTab,
};

const Desktop: React.FC = () => {
  const [openTabs, setOpenTabs] = useState<TabType[]>([]);
  const [zIndices, setZIndices] = useState<Record<TabType, number>>({} as Record<TabType, number>);
  const [maxZIndex, setMaxZIndex] = useState(100);

  const openTab = (tab: TabType) => {
    if (!openTabs.includes(tab)) {
      setOpenTabs([...openTabs, tab]);
      // Set initial z-index for new tab
      setZIndices(prev => ({
        ...prev,
        [tab]: maxZIndex + 1
      }));
      setMaxZIndex(prev => prev + 1);
    } else {
      // Bring existing tab to front
      bringToFront(tab);
    }
  };

  const closeTab = (tab: TabType) => {
    setOpenTabs(openTabs.filter(t => t !== tab));
    setZIndices(prev => {
      const newIndices = { ...prev };
      delete newIndices[tab];
      return newIndices;
    });
  };

  const bringToFront = (tab: TabType) => {
    const newZIndex = maxZIndex + 1;
    setZIndices(prev => ({
      ...prev,
      [tab]: newZIndex
    }));
    setMaxZIndex(newZIndex);
  };

  // Handle bring to front events from TabWindow components
  useEffect(() => {
    const handleBringToFront = (e: Event) => {
      const customEvent = e as CustomEvent;
      bringToFront(customEvent.detail);
    };

    window.addEventListener('bringToFront', handleBringToFront as EventListener);

    return () => {
      window.removeEventListener('bringToFront', handleBringToFront as EventListener);
    };
  }, [maxZIndex]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Main Window - Fixed in center */}
      <div className="fixed inset-0 flex items-center justify-center p-4 z-10">
        <MainWindow openTab={openTab} />
      </div>
      
      {/* Tab Windows - Can be dragged anywhere */}
      {openTabs.map((tab) => {
        const Component = tabComponents[tab];
        return (
          <TabWindow 
            key={tab} 
            title={tab} 
            zIndex={zIndices[tab] || 100} 
            onClose={() => closeTab(tab)}
          >
            <Component />
          </TabWindow>
        );
      })}
    </div>
  );
};

export default Desktop;