// Libraries
import React, { useEffect, useState } from 'react';
// Components | Utils
import Splash from '../../components/PreGame/Splash';
import Login from '../../components/PreGame/Login';
// Assets
import * as Styled from './styles';

const Introduction = () => {
  const [isOnSplash, setIsOnSplash] = useState(true);

  /*
  ====================================================
  ================== USE EFFECT ======================
  ====================================================
  */

  // Adds fake loading scene
  useEffect(() => {
    setTimeout(() => {
      setIsOnSplash(false);
    }, 2500);
  }, []);

  /*
  ====================================================
  ==================== RENDER ========================
  ====================================================
  */

  return (
    <Styled.IntroductionScreen>
      {isOnSplash ? <Splash /> : <Login />}
    </Styled.IntroductionScreen>
  );
};

export default Introduction;
