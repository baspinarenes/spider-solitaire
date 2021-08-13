import React from 'react';
import useSound from 'use-sound';
import * as S from './styles';
import WindowsXPShutdown from '../../assets/images/win-xp-shutdown.webp';
import WindowsXPLogo2 from '../../assets/images/win-xp-logo2.png';
import LoginAccount from '../../components/LoginAccount';
import ShutdownSound from '../../assets/audios/shutdown.ogg';

const LoginScreen = ({ setUsername }) => {
  const [play] = useSound(ShutdownSound);

  return (
    <S.LoginScreen>
      <header />
      <main>
        <S.LoginDescribe>
          <img src={WindowsXPLogo2} alt="" />
          <span>To begin, select your user</span>
        </S.LoginDescribe>
        <S.Accounts>
          <LoginAccount guest setUsername={setUsername} />
          <LoginAccount setUsername={setUsername} />
        </S.Accounts>
      </main>
      <footer>
        <div>
          <S.ShutdownButton onClick={play}>
            <img src={WindowsXPShutdown} alt="" />
            <span>Turn of computer</span>
          </S.ShutdownButton>
        </div>
        <S.FooterDescribe>
          This XP cannot be turned off. After all these years we have been away, we wouldnt want to
          close, would we? But for your beautiful memory, I will play a shutdown sound.
        </S.FooterDescribe>
      </footer>
    </S.LoginScreen>
  );
};

export default LoginScreen;
