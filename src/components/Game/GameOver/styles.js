// Libraries
import styled from 'styled-components';
// Components | Utils
import { styledComponents } from '../../../globalStyles';
// Assets
import CloseSVG from '../../../assets/images/close.svg';
import CloseHoverSVG from '../../../assets/images/close-hover.svg';
import CloseActiveSVG from '../../../assets/images/close-active.svg';

export const WinScreen = styled.div`
  animation: ${(props) => props.theme.keyFrames.colorChange} 10s
    infinite;
  align-items: center;
  display: flex;
  font-size: 4rem;
  font-weight: bold;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Window = styled.div`
  background-color: ${(props) => props.theme.colors.xpWindowBg};
  bottom: 10px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: grid;
  grid-template-rows: 30px 1fr;
  height: 150px;
  left: 0;
  margin: 0 auto;
  overflow: hidden;
  position: absolute;
  right: 0;
  width: 300px;
  z-index: 2;
`;

export const TitleBar = styled.div`
  align-items: center;
  background: ${(props) => props.theme.gradients.titleBarBg};
  color: ${(props) => props.theme.colors.titleBarText};
  display: flex;
  font-family: 'Trebuchet MS';
  font-size: 13px;
  padding: 6px 15px;

  img {
    height: 100%;
  }
`;

export const CloseButton = styled(styledComponents.Button)`
  background-image: url(${CloseSVG});
  background-repeat: no-repeat;
  height: 16px;
  margin-left: auto;
  width: 16px;

  &:hover {
    background-image: url(${CloseHoverSVG});
  }

  &:not(:disabled):active {
    background-image: url(${CloseActiveSVG});
  }
`;

export const WindowBody = styled.div`
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.windowBorder};
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  gap: 10px;
  height: 100%;
  text-align: center;
  justify-content: center;
`;

export const WindowContent = styled.div`
  background-color: ${(props) => props.theme.colors.xpWindowBg};
  display: flex;
  flex-direction: column;
  font-size: 0.6rem;
  gap: 8px;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;

  p {
    line-height: 0.9rem;
  }

  button {
    background-color: ${(props) => props.theme.colors.buttonBg};
    border: 1px solid black;
    border-radius: 3px;
    color: ${(props) => props.theme.colors.buttonText};
    font-size: 0.55rem;
    height: 20px;
    margin: 0 auto;
    width: 60px;

    &:hover {
      box-shadow: ${(props) =>
        props.theme.boxShadows.windowButton$hover};
    }

    &:active {
      box-shadow: ${(props) =>
        props.theme.boxShadows.windowButton$active};
    }
  }
`;

export const YesButton = styled(styledComponents.Button)`
  background-color: ${(props) => props.theme.colors.buttonBg};
  border: 1px solid black;
  border-radius: 3px;
  color: ${(props) => props.theme.colors.buttonText};
  font-size: 0.55rem;
  height: 20px;
  margin: 0 auto;
  width: 60px;

  &:hover {
    box-shadow: ${(props) =>
      props.theme.boxShadows.windowButton$hover};
  }

  &:active {
    box-shadow: ${(props) =>
      props.theme.boxShadows.windowButton$active};
  }
`;
