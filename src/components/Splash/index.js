import React from 'react';
import * as Styled from './styles';
import WindowsXPLogo from '../../assets/images/win-xp-logo.webp';
import MicrosoftLogo from '../../assets/images/microsoft-logo.webp';

const Splash = () => {
  return (
    <Styled.Splash>
      <main>
        <Styled.Logo src={WindowsXPLogo} alt="" />
        <Styled.Loader>
          <Styled.Bars>
            <Styled.Bar />
            <Styled.Bar />
            <Styled.Bar />
          </Styled.Bars>
        </Styled.Loader>
      </main>
      <footer>
        <span>Copyright © Microsoft Corporation</span>
        <Styled.FooterLogo src={MicrosoftLogo} alt="" height="60" />
      </footer>
    </Styled.Splash>
  );
};

export default Splash;
