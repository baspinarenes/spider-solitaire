import React, { useState, useEffect } from 'react';
import LoginScreen from './views/LoginScreen';
import SplashScreen from './views/SplashScreen';
import DesktopScreen from './views/DesktopScreen/index';

function App() {
  const [isOnSplash, setIsOnSplash] = useState(true);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setIsOnSplash(false);
    }, 5000);

    return () => {
      clearTimeout(splashTimer);
    };
  }, []);

  let renderedPage;

  if (username) {
    renderedPage = <DesktopScreen />;
  } else if (isOnSplash) {
    renderedPage = <SplashScreen />;
  } else {
    renderedPage = <LoginScreen setUsername={setUsername} />;
  }

  return <div id="App">{renderedPage}</div>;
}

export default App;
