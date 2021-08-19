import React, { useEffect, useState } from 'react';
import Splash from '../../components/Splash';
import Login from '../../components/Login';
import * as Styled from './styles';

const IntroductionScreen = (props) => {
  const { setIsLoggedIn } = props;

  const [onSplash, setOnSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOnSplash(false);
    }, 3000);
  }, []);

  return (
    <Styled.Introduction>
      {onSplash ? (
        <Splash />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </Styled.Introduction>
  );
};

export default IntroductionScreen;
