import React, { useState, useEffect } from 'react';
import Desktop from './components/Desktop';
import BootSequence from './components/BootSequence';

function App() {
  const [showBoot, setShowBoot] = useState(true);

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