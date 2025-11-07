import React, { useState, useEffect, useCallback, useRef } from "react";
import MainWindow from "./MainWindow";
import TabWindow from "./TabWindow";
import ProjectsTab from "./ProjectsTab";
import AboutTab from "./AboutTab";
import ExperienceTab from "./ExperienceTab";
import ContactTab from "./ContactTab";
import Resume from "./Resume";

type TabType = 'projects' | 'about' | 'experience' | 'contact' | 'resume';

const tabComponents = {
  projects: ProjectsTab,
  about: AboutTab,
  experience: ExperienceTab,
  contact: ContactTab,
  resume: Resume,
};

const TabWindowAny = TabWindow as any;

const Desktop: React.FC = () => {
  const [openTabs, setOpenTabs] = useState<TabType[]>([]);
  const [zIndices, setZIndices] = useState<Record<TabType, number>>({} as Record<TabType, number>);
  const [maxZIndex, setMaxZIndex] = useState(100);
  const tabPositions = useRef<Map<TabType, {x: number, y: number}>>(new Map());

  const findEmptySpace = (tabName: TabType) => {
    if (tabPositions.current.has(tabName)) {
      return tabPositions.current.get(tabName)!;
    }

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const tabWidth = 650;
    const tabHeight = 600;
    const padding = 60;
    
    const cols = Math.floor((windowWidth - 200) / (tabWidth + padding));
    const rows = Math.floor((windowHeight - 200) / (tabHeight + padding));
    
    const occupiedPositions = Array.from(tabPositions.current.values());
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * (tabWidth + padding) + padding + 50;
        const y = row * (tabHeight + padding) + padding + 50;
        
        const isOccupied = occupiedPositions.some(pos => 
          Math.abs(pos.x - x) < tabWidth - 100 && Math.abs(pos.y - y) < tabHeight - 100
        );
        
        if (!isOccupied && x + tabWidth < windowWidth && y + tabHeight < windowHeight) {
          const position = {x, y};
          tabPositions.current.set(tabName, position);
          return position;
        }
      }
    }
    
    const offset = (tabPositions.current.size * 50) % 300;
    const position = {x: 150 + offset, y: 150 + offset};
    tabPositions.current.set(tabName, position);
    return position;
  };

  const bringToFront = useCallback((tab: TabType) => {
    setMaxZIndex(prev => {
      const newZIndex = prev + 1;
      setZIndices(prevIndices => ({
        ...prevIndices,
        [tab]: newZIndex
      }));
      return newZIndex;
    });
  }, []);

  const openTab = (tab: TabType) => {
    if (!openTabs.includes(tab)) {
      setOpenTabs(prev => [...prev, tab]);
      setMaxZIndex(prev => {
        const newZIndex = prev + 1;
        setZIndices(prevIndices => ({
          ...prevIndices,
          [tab]: newZIndex
        }));
        return newZIndex;
      });
    } else {
      bringToFront(tab);
    }
  };

  const closeTab = (tab: TabType) => {
    setOpenTabs(prev => prev.filter(t => t !== tab));
    setZIndices(prev => {
      const newIndices = { ...prev };
      delete newIndices[tab];
      return newIndices;
    });
  };

  useEffect(() => {
    const handleBringToFront = (e: Event) => {
      const customEvent = e as CustomEvent<TabType>;
      bringToFront(customEvent.detail);
    };

    window.addEventListener('bringToFront', handleBringToFront as EventListener);

    return () => {
      window.removeEventListener('bringToFront', handleBringToFront as EventListener);
    };
  }, [bringToFront]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-mono">
      {/* Matrix rain effect */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="matrix-rain"></div>
      </div>

      {/* Animated grid background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="grid-background"></div>
      </div>

      {/* Scanline effect */}
      <div className="scanline"></div>
      
      {/* Main Window - Fixed in center */}
      <div className="fixed inset-0 flex items-center justify-center p-4 z-10">
        <MainWindow openTab={openTab} />
      </div>
      
      {/* Tab Windows - Can be dragged anywhere */}
      {openTabs.map((tab, index) => {
        const Component = tabComponents[tab];
        const position = findEmptySpace(tab);
        return (
          <TabWindowAny 
            key={tab} 
            title={tab}
            initialPosition={position}
            zIndex={zIndices[tab] || 100 + index} 
            onClose={() => closeTab(tab)}
          >
            <Component />
          </TabWindowAny>
        );
      })}
    </div>
  );
};

export default Desktop;