import React, { useEffect, useState } from 'react';
import App from './App';
import SplashScreen from './components/loader/SplashScreen';
import { updatePortfolioVisitors } from './utils/visitors';

export default function Render() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updatePortfolioVisitors();
      setShowSplash(false);
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

 
    


  return (
    <div>
      {showSplash ? (<SplashScreen />) : (<App />)}
    </div>
  );
}

