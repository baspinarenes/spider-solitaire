// Libraries
import styled from 'styled-components';

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
