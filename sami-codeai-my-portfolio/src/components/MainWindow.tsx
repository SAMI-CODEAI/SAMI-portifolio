import React from "react";
import TabButton from "./TabButton";
import {
  faUser, faGift, faFolderOpen, faEnvelope, faFileAlt, faCodeBranch
} from '@fortawesome/free-solid-svg-icons';

interface MainWindowProps {
  openTab: (tab: 'projects' | 'about' | 'experience' | 'contact' | 'resume' | 'sidequests') => void;
}

const MainWindow: React.FC<MainWindowProps> = ({ openTab }) => (
  <div className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center p-4">
    <div className="terminal-container w-full max-w-2xl pulse-subtle">
      <div className="scanline"></div>
      <div className="crt-overlay"></div>
      
      <div className="terminal-header px-4 py-3 flex items-center border-b border-green-500/30">
        <div className="text-green-500 text-sm font-light tracking-wide">home</div>
        <div className="flex-1"></div>
        <div className="text-green-500 text-xs font-light tracking-wide">
          {new Date().toLocaleDateString()}
        </div>
      </div>
      
      <div className="terminal-content p-6">
        <div className="space-y-6">
          <div className="ascii-art text-center">
            <pre className="text-green-500 inline-block text-xs md:text-sm">
{`
███████╗ █████╗ ███╗   ███╗██╗██╗  ██╗███████╗██╗  ██╗ █████╗ 
██╔════╝██╔══██╗████╗ ████║██║██║ ██╔╝██╔════╝██║  ██║██╔══██╗
███████╗███████║██╔████╔██║██║█████╔╝ ███████╗███████║███████║
╚════██║██╔══██║██║╚██╔╝██║██║██╔═██╗ ╚════██║██║══██║██╔══██║
███████║██║  ██║██║ ╚═╝ ██║██║██║  ██╗███████║██║  ██║██║  ██║
╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝`}
            </pre>
          </div>

          <div className="text-center">
            <div className="text-green-500 text-lg mb-2">
              B.Tech CSE - AI/ML | Institute of Aeronautical Engineering, Hyderabad
            </div>
            <div className="flex justify-center gap-4 mb-6">
              <a href="https://github.com/SAMI-CODEAI" target="_blank" rel="noopener noreferrer" 
                 className="text-green-500 hover:text-green-300 transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/samiksha-thogeti" target="_blank" rel="noopener noreferrer"
                 className="text-green-500 hover:text-green-300 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Tabs with Centered Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="border border-green-500/40 rounded-lg p-2 hover:border-green-300 transition flex justify-center items-center text-center">
              <TabButton icon={faUser} label="About" onClick={() => openTab("about")} />
            </div>

            <div className="border border-green-500/40 rounded-lg p-2 hover:border-green-300 transition flex justify-center items-center text-center">
              <TabButton icon={faGift} label="Experience" onClick={() => openTab("experience")} />
            </div>

            <div className="border border-green-500/40 rounded-lg p-2 hover:border-green-300 transition flex justify-center items-center text-center">
              <TabButton icon={faFolderOpen} label="Projects" onClick={() => openTab("projects")} />
            </div>

            <div className="border border-green-500/40 rounded-lg p-2 hover:border-green-300 transition flex justify-center items-center text-center">
              <TabButton icon={faEnvelope} label="Contact" onClick={() => openTab("contact")} />
            </div>

            <div className="border border-green-500/40 rounded-lg p-2 hover:border-green-300 transition flex justify-center items-center text-center">
              <TabButton icon={faFileAlt} label="Resume" onClick={() => openTab("resume")} />
            </div>

            <div className="border border-green-500/40 rounded-lg p-2 hover:border-green-300 transition flex justify-center items-center text-center">
              <TabButton icon={faCodeBranch} label="Connect" onClick={() => openTab("sidequests")} />
            </div>
          </div>

          <div className="text-center text-green-400/60 text-sm mt-6">
            Select any tab to explore my profile, experience, and skills — move windows freely!
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MainWindow;
