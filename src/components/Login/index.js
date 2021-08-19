import React from 'react';
import useSound from 'use-sound';
import * as Styled from './styles';
import WindowsXPShutdown from '../../assets/images/win-xp-shutdown.webp';
import WindowsXPLogo2 from '../../assets/images/win-xp-logo2.webp';
import LoginAccount from '../LoginAccount';
import ShutdownSound from '../../assets/audios/shutdown.ogg';

const Login = ({ setIsLoggedIn }) => {
  const [play] = useSound(ShutdownSound, { volume: 0.15 });

  return (
    <Styled.LoginScreen>
      <header />
      <main>
        <Styled.LoginDescribe>
          <img src={WindowsXPLogo2} alt="" />
          <span>To begin, select your user</span>
        </Styled.LoginDescribe>
        <Styled.Accounts>
          <LoginAccount isGuest setIsLoggedIn={setIsLoggedIn} />
          <LoginAccount setIsLoggedIn={setIsLoggedIn} />
        </Styled.Accounts>
      </main>
      <footer>
        <div>
          <Styled.ShutdownButton onClick={play}>
            <img src={WindowsXPShutdown} alt="shutdown icon" />
            <span>Turn off computer</span>
          </Styled.ShutdownButton>
        </div>
        <Styled.FooterDescribe>
          This XP cannot be turned off. After all these years we have
          been away, we wouldnt want to close, would we? But out of
          respect for you, I will play a shutdown sound.
        </Styled.FooterDescribe>
      </footer>
    </Styled.LoginScreen>
  );
};

export default Login;
