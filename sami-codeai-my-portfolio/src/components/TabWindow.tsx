import React, { useRef, useState, useEffect } from "react";

interface TabWindowProps {
  title: string;
  zIndex: number;
  onClose: () => void;
  children: React.ReactNode;
}

const TabWindow: React.FC<TabWindowProps> = ({ title, zIndex, onClose, children }) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 200, y: 150 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!windowRef.current) return;

    const rect = windowRef.current.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const newX = e.clientX - offset.x;
    const newY = e.clientY - offset.y;

    // Clamp movement within viewport borders
    const element = windowRef.current;
    if (element) {
      const maxX = window.innerWidth - element.offsetWidth;
      const maxY = window.innerHeight - element.offsetHeight;

      setPosition({
        x: Math.min(Math.max(newX, 0), maxX),
        y: Math.min(Math.max(newY, 0), maxY),
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "grabbing";
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
    };
  }, [isDragging]);

  return (
    <div
      ref={windowRef}
      className="terminal-container absolute max-w-2xl max-h-[80vh]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex,
        cursor: isDragging ? "grabbing" : "grab",
        minWidth: "500px",
      }}
    >
      <div className="terminal-header px-4 py-3 flex items-center bg-green-900/30"
           onMouseDown={handleMouseDown}>
        <div className="text-terminal text-sm font-light tracking-wide flex items-center gap-2">
          <span>📁</span>
          {title}
        </div>
        <div className="flex-1"></div>
        <button
          className="text-terminal hover:text-terminal-muted transition-colors text-lg font-bold w-6 h-6 flex items-center justify-center hover:bg-green-900/40 rounded"
          onClick={onClose}
          onMouseDown={(e) => e.stopPropagation()}
        >
          ×
        </button>
      </div>

      <div className="terminal-content p-6 overflow-y-auto max-h-[calc(80vh-40px)]"
           onMouseDown={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default TabWindow;