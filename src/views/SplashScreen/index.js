import React from 'react';
import * as S from './styles';
import WindowsXPLogo from '../../assets/images/win-xp-logo.webp';
import MicrosoftLogo from '../../assets/images/microsoft-logo.webp';
// import OpeningMusic from '../../assets/audios/opening.ogg';

const SplashScreen = () => {
  console.log(
    "%cHi, I'm Enes. Welcome to my project. You can find more at https://enesbaspinar.me. Oh by the way, feel free to look at my CV :)",
    'background: #222; color: #bada55; padding: 4px;'
  );

  return (
    <S.SplashScreen>
      <main>
        <S.Logo src={WindowsXPLogo} alt="" />
        <S.Loader>
          <S.Bars>
            <S.Bar />
            <S.Bar />
            <S.Bar />
          </S.Bars>
        </S.Loader>
      </main>
      <footer>
        <span>Copyright © Microsoft Corporation</span>
        <S.FooterLogo src={MicrosoftLogo} alt="" height="60" />
      </footer>
    </S.SplashScreen>
  );
};

export default SplashScreen;
