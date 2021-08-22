import styled, { css } from 'styled-components';
import CloseSVG from '../../../assets/images/close.svg';
import CloseHoverSVG from '../../../assets/images/close-hover.svg';
import CloseActiveSVG from '../../../assets/images/close-active.svg';
import { styledComponents } from '../../../globalStyles';

export const WinScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (!props.isGameFinished ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: bold;
  animation: ${(props) => props.theme.keyFrames.colorChange} 10s
    infinite;
`;

export const WindowContent = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${(props) => props.theme.colors.xpWindowBg};
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.6rem;
  text-align: center;
  margin-top: 10px;

  p {
    line-height: 0.9rem;
  }

  button {
    font-size: 0.55rem;
    color: ${(props) => props.theme.colors.buttonText};
    background-color: ${(props) => props.theme.colors.buttonBg};
    width: 60px;
    height: 20px;
    border: 1px solid black;
    border-radius: 3px;
    margin: 0 auto;

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

export const Window = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 30px 20px 1fr;
  z-index: 2;
  background-color: ${(props) => props.theme.colors.xpWindowBg};

  ${(props) =>
    props.isGameOverWindow &&
    css`
      height: ${props?.size.height};
      width: ${props?.size.width};
      left: 0;
      right: 0;
      bottom: 10px;
      position: absolute;
      margin: 0 auto;
      display: ${!props.isGameFinished && 'none'};
      grid-template-rows: 30px 1fr;
    `}
`;

export const TitleBar = styled.div`
  font-family: 'Trebuchet MS';
  background: ${(props) => props.theme.gradients.titleBarBg};
  font-size: 13px;
  padding: 6px;
  color: ${(props) => props.theme.colors.titleBarText};
  display: flex;
  align-items: center;

  img {
    height: 100%;
  }
`;

export const CloseButton = styled(styledComponents.Button)`
  margin-left: auto;
  width: 23px;
  height: 23px;
  background-image: url(${CloseSVG});
  background-repeat: no-repeat;

  &:hover {
    background-image: url(${CloseHoverSVG});
  }

  &:not(:disabled):active {
    background-image: url(${CloseActiveSVG});
  }
`;

export const WindowBody = styled.div`
  height: 100%;
`;
