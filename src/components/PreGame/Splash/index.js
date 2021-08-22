// Libraries
import React from 'react';
// Assets
import * as Styled from './styles';
import WindowsXPLogo from '../../../assets/images/winxp-logo.webp';
import MicrosoftLogo from '../../../assets/images/microsoft-logo.webp';

const Splash = () => {
  /*
  ====================================================
  ==================== RENDER ========================
  ====================================================
  */

  return (
    <Styled.SplashScreen>
      <Styled.Main>
        <Styled.Logo
          src={WindowsXPLogo}
          width="300"
          height="205"
          alt="windows xp logo"
        />
        <Styled.Loader>
          <Styled.Bars>
            <Styled.Bar />
            <Styled.Bar />
            <Styled.Bar />
          </Styled.Bars>
        </Styled.Loader>
      </Styled.Main>
      <Styled.Footer>
        <span>Copyright © Microsoft Corporation</span>
        <Styled.FooterLogo
          src={MicrosoftLogo}
          width="120"
          height="60"
          alt="microsoft logo"
        />
      </Styled.Footer>
    </Styled.SplashScreen>
  );
};

export default Splash;
