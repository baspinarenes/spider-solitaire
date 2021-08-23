// Libraries
import styled from 'styled-components';
// Components | Utils
import { styledComponents } from '../../../globalStyles';

export const SplashScreen = styled(styledComponents.Screen)`
  background-color: ${(props) => props.theme.colors.splashScreenBg};
  padding: 7px 33px;
  color: ${(props) => props.theme.colors.splashScreenText};
  cursor: none;
`;

export const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  // main = fullHeight - footer - top and bottom padding
  height: calc(100% - 60px - 14px);
  justify-content: center;
`;

export const Logo = styled.img`
  margin-bottom: 70px;
  max-width: 300px;
  width: 50vw;
  height: auto;
`;

export const Loader = styled.div`
  border: 1px solid ${(props) => props.theme.colors.loaderBorder};
  border-radius: 5px;
  height: 20px;
  overflow: hidden;
  padding: 2px 1px;
  width: 200px;
`;

export const Bars = styled.div`
  align-items: center;
  animation: ${(props) => props.theme.keyFrames.loadingKeyFrame} 2s
    linear infinite;
  display: flex;
  gap: 3px;
  height: 100%;
`;

export const Bar = styled.div`
  background: ${(props) => props.theme.gradients.barBg};
  height: 100%;
  width: 10px;
`;

export const Footer = styled.footer`
  align-items: center;
  display: flex;
  font-size: 0.7em;
  height: 60px;
  justify-content: space-between;
`;

export const FooterLogo = styled.img`
  filter: invert(100%); // black logo -> white logo
  height: 60px;
`;
