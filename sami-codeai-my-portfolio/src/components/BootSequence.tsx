import React from 'react';

const BootSequence: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center p-4">
      <div className="terminal-container w-full max-w-2xl pulse-subtle">
        <div className="scanline"></div>
        <div className="crt-overlay"></div>
        
        <div className="terminal-header px-4 py-3 flex items-center border-b border-green-500/30">
          <div className="text-green-300 text-sm font-light tracking-wide">system_boot</div>
          <div className="flex-1"></div>
          <div className="text-green-300 text-xs font-light tracking-wide">
            {new Date().toLocaleDateString()}
          </div>
        </div>
        
        <div className="terminal-content p-6">
          <div className="space-y-4">
            <div className="typing-effect-short" style={{animationDelay: '0ms'}}>
              <span className="text-green-500">&gt;</span> Initializing system...
            </div>
            <div className="typing-effect-short" style={{animationDelay: '800ms'}}>
              <span className="text-green-500">&gt;</span> Loading portfolio data...
            </div>
            <div className="typing-effect-short" style={{animationDelay: '1600ms'}}>
              <span className="text-green-500">&gt;</span> Mounting file system...
            </div>
            <div className="typing-effect-short" style={{animationDelay: '2400ms'}}>
              <span className="text-green-500">&gt;</span> Starting desktop environment...
            </div>
            
            <div className="w-full h-2 bg-green-900/30 mt-6 overflow-hidden rounded-full">
              <div className="h-full bg-green-500/70 loading-bar"></div>
            </div>

            <div className="text-center mt-8">
              <div className="text-green-400/60 text-sm">
                Booting Sami OS v2.0...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootSequence;