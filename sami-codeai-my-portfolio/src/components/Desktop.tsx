import React, { useState, useEffect, useCallback, useRef } from "react";
import MainWindow from "./MainWindow";
import TabWindow from "./TabWindow";
import ProjectsTab from "./ProjectsTab";
import AboutTab from "./AboutTab";
import ExperienceTab from "./ExperienceTab";
import ContactTab from "./ContactTab";
import Resume from "./Resume";
import SideQuestsTab from "./SideQuestsTab";

type TabType = 'projects' | 'about' | 'experience' | 'contact' | 'resume' | 'sidequests';

const tabComponents = {
  projects: ProjectsTab,
  about: AboutTab,
  experience: ExperienceTab,
  contact: ContactTab,
  resume: Resume,
  sidequests: SideQuestsTab,
};

const TabWindowAny = TabWindow as any;

const Desktop: React.FC = () => {
  const [openTabs, setOpenTabs] = useState<TabType[]>([]);
  const [zIndices, setZIndices] = useState<Record<TabType, number>>({} as Record<TabType, number>);
  const [maxZIndex, setMaxZIndex] = useState(100);
  const tabPositions = useRef<Map<TabType, { x: number, y: number }>>(new Map());

  const findEmptySpace = (tabName: TabType) => {
    if (tabPositions.current.has(tabName)) {
      return tabPositions.current.get(tabName)!;
    }

    // Cascading offset: each new tab is offset by 30px from the previous
    const CASCADE_OFFSET = 30;
    // Shift slightly to the right and top to avoid covering center buttons immediately
    const BASE_X = Math.max(50, (window.innerWidth - 650) / 2 + 150);
    const BASE_Y = Math.max(40, 60);
    const tabIndex = tabPositions.current.size;
    const wrappedIndex = tabIndex % 8; // wrap after 8 tabs

    const position = {
      x: BASE_X + wrappedIndex * CASCADE_OFFSET,
      y: BASE_Y + wrappedIndex * CASCADE_OFFSET,
    };
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
    // Clear saved position so re-opening gets a fresh cascade slot
    tabPositions.current.delete(tab);
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
    <div className="min-h-screen relative overflow-hidden font-mono">
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