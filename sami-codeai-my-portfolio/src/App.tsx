import React, { useState, useEffect } from 'react';
import Desktop from './components/Desktop';
import BootSequence from './components/BootSequence';
import { useAudio } from './context/AudioContext';

function App() {
  const { playClickSound } = useAudio();
  const [showBoot, setShowBoot] = useState(true);

  useEffect(() => {
    const handleClick = () => playClickSound();
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [playClickSound]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBoot(false);
    }, 4000); // Show boot sequence for 4 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showBoot) {
    return <BootSequence />;
  }

  return <Desktop />;
}

export default App;