import React, { useState } from 'react';
import IntroductionScreen from './views/IntroductionScreen';
import DesktopScreen from './views/DesktopScreen/index';
import UserContextProvider from './contexts/UserContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContextProvider>
      <div id="app">
        {isLoggedIn ? (
          <DesktopScreen />
        ) : (
          <IntroductionScreen setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </UserContextProvider>
  );
}

export default App;
