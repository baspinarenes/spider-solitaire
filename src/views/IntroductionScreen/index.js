import React, { useEffect, useState } from 'react';
import Splash from '../../components/Splash/index';
import Login from '../../components/Login/index';

const IntroductionScreen = (props) => {
  const { setIsLoggedIn } = props;

  const [onSplash, setOnSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOnSplash(false);
    }, 3000);
  }, []);

  return (
    <div id="introduction-screen">
      {onSplash ? (
        <Splash />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default IntroductionScreen;
