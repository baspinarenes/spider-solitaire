// Libraries
import React from 'react';
// Components | Utils
import UserAccount from '../UserAccount';
import getSounds from '../../../utils/soundUtils';
// Assets
import * as Styled from './styles';
import WindowsXPShutdown from '../../../assets/images/winxp-shutdown.webp';
import WindowsXPLogo2 from '../../../assets/images/login-logo.webp';

const Login = () => {
  const [shutdownSound] = getSounds('shutdown');

  /*
  ====================================================
  ==================== RENDER ========================
  ====================================================
  */

  return (
    <Styled.LoginScreen>
      <Styled.Header />
      <Styled.Main>
        <Styled.MainLeft>
          <img
            src={WindowsXPLogo2}
            alt="windows xp logo"
            width="205"
            height="118"
          />
          <span>To begin, select your user</span>
        </Styled.MainLeft>
        <Styled.MainRight>
          <UserAccount isGuest />
          <UserAccount />
        </Styled.MainRight>
      </Styled.Main>
      <Styled.Footer>
        <div>
          <Styled.ShutdownButton onClick={() => shutdownSound.play()}>
            <img
              src={WindowsXPShutdown}
              alt="shutdown icon"
              height="25"
              width="25"
            />
            <span>Turn off computer</span>
          </Styled.ShutdownButton>
        </div>
        <p>
          This XP cannot be turned off. After all these years we have
          been away, we wouldnt want to close, would we? But out of
          respect for you, I will play a shutdown sound.
        </p>
      </Styled.Footer>
    </Styled.LoginScreen>
  );
};

export default Login;
