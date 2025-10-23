import React, { useRef, useState, useEffect } from "react";

interface TabWindowProps {
  title: string;
  zIndex: number;
  onClose: () => void;
  children: React.ReactNode;
}

const TabWindow: React.FC<TabWindowProps> = ({ title, zIndex, onClose, children }) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 50, y: 50 }); // Start at center
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [hasBeenMoved, setHasBeenMoved] = useState(false);

  // Set initial random position around the center
  useEffect(() => {
    if (!hasBeenMoved) {
      const randomX = 50 + (Math.random() * 30 - 15); // 35% to 65%
      const randomY = 50 + (Math.random() * 30 - 15); // 35% to 65%
      setPosition({ x: randomX, y: randomY });
      setHasBeenMoved(true);
    }
  }, [hasBeenMoved]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (windowRef.current) {
      setIsDragging(true);
      const rect = windowRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      
      // Bring to front when clicked
      const event = new CustomEvent('bringToFront', { detail: title });
      window.dispatchEvent(event);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    // Calculate new position as percentage of viewport
    const newX = (e.clientX / window.innerWidth) * 100;
    const newY = (e.clientY / window.innerHeight) * 100;

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging]);

  // Handle bring to front event
  useEffect(() => {
    const handleBringToFront = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail === title) {
        const event = new CustomEvent('updateZIndex', { 
          detail: { tab: title, zIndex: 1000 } 
        });
        window.dispatchEvent(event);
      }
    };

    window.addEventListener('bringToFront', handleBringToFront as EventListener);
    return () => {
      window.removeEventListener('bringToFront', handleBringToFront as EventListener);
    };
  }, [title]);

  return (
    <div
      ref={windowRef}
      className="terminal-container absolute max-w-2xl max-h-[80vh] cursor-move select-none"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex,
        cursor: isDragging ? 'grabbing' : 'grab',
        minWidth: '500px'
      }}
    >
      <div className="scanline"></div>
      <div className="crt-overlay"></div>
      
      <div 
        className="terminal-header px-4 py-3 flex items-center"
        onMouseDown={handleMouseDown}
      >
        <div className="text-terminal text-sm font-light tracking-wide flex items-center gap-2">
          <span>📁</span>
          {title}
        </div>
        <div className="flex-1"></div>
        <button 
          className="text-terminal hover:text-terminal-muted transition-colors text-lg font-bold w-6 h-6 flex items-center justify-center hover:bg-green-900/30 rounded"
          onClick={onClose}
          onMouseDown={(e) => e.stopPropagation()}
        >
          ×
        </button>
      </div>
      
      <div 
        className="terminal-content p-6 overflow-y-auto max-h-[calc(80vh-40px)]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default TabWindow;