// Libraries
import styled from 'styled-components';
// Assets
import { styledComponents } from '../../../globalStyles';

export const LoginScreen = styled(styledComponents.Screen)`
  color: ${(props) => props.theme.colors.loginScreenTextColor};
`;

export const Header = styled.header`
  background-color: ${(props) =>
    props.theme.colors.loginScreenHeaderBg};
  border-bottom: 3px solid;
  border-image-slice: 1;
  border-image-source: ${(props) =>
    props.theme.gradients.loginScreenHeaderBorderColor};
  height: 90px;
`;

export const Main = styled.main`
  background: ${(props) => props.theme.gradients.loginScreenMainBg};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr;
  // main = fullHeight - header - footer
  height: calc(100% - 90px - 130px);
  padding: 20px;

  @media (min-width: ${(props) =>
      props.theme.breakpoints.smallTablet}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export const MainLeft = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  font-size: 1.9rem;

  @media (min-width: ${(props) =>
      props.theme.breakpoints.smallTablet}) {
    padding-right: 60px;
    border-right: 1px solid;
    border-image-source: ${(props) =>
      props.theme.gradients.loginScreenMiddleBorderColor};
    border-image-slice: 0 1 0 0;
    align-items: flex-end;
  }

  img {
    width: 200px;
  }

  span {
    font-size: 1.3rem;
  }
`;

export const MainRight = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: minmax(70vw, 90vw);
  margin: 0 auto;

  @media (min-width: ${(props) =>
      props.theme.breakpoints.smallTablet}) {
    padding-left: 30px;
    width: 100%;
  }
`;

export const Footer = styled.footer`
  align-items: center;
  background-color: ${(props) =>
    props.theme.colors.loginScreenFooterBg};
  border-image-slice: 1;
  border-image-source: ${(props) =>
    props.theme.gradients.loginScreenFooterBorderColor};
  border-top: 3px solid;
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  gap: 10px;
  height: 130px;
  padding: 20px 50px;
  text-align: center;

  p {
    max-width: 450px;
  }

  @media (min-width: ${(props) =>
      props.theme.breakpoints.smallTablet}) {
    flex-direction: row;
    gap: 30px;
    justify-content: space-between;
    text-align: initial;
  }
`;

export const ShutdownButton = styled(styledComponents.Button)`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 25px;
    height: 25px;
  }

  span {
    font-size: 1rem;
  }
`;
