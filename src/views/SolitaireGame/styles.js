import styled, { keyframes } from 'styled-components';
import ClickableCursor from '../../assets/cursors/cursor-clickable.cur';

import CloseSVG from '../../assets/images/close.svg';
import CloseHoverSVG from '../../assets/images/close-hover.svg';
import CloseActiveSVG from '../../assets/images/close-active.svg';

export const Board = styled.div`
  position: relative;
  height: 100%;
  padding: 10px;
  background-image: url(${`${process.env.PUBLIC_URL}/solitaire-background.webp`});
  background-size: cover;
  display: grid;
  grid-template-rows: 1fr 50px;

  @media (min-width: 500px) {
    padding: 20px 30px;
    grid-template-rows: 1fr 100px;
  }
`;

export const BottomArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;

  @media (min-width: 500px) {
    height: 100px;
  }
`;

export const HintArea = styled.div`
  padding: 7px;
  height: 100%;
  margin: 0 10px;
  flex-grow: 1;
  max-width: 130px;
  min-width: 100px;
  background-color: green;
  border: 1px solid black;
  color: white;
  font-size: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: url(${ClickableCursor}), pointer;

  @media (min-width: 500px) {
    font-size: 0.8rem;
    max-width: 180px;
  }
`;

export const Hint = styled.div`
  padding: 2px;
  background-color: green;
  display: flex;
  gap: 10px;

  span {
    display: inline-block;
    width: 50%;

    &:first-of-type {
      text-align: right;
    }
  }
`;

export const CompletedArea = styled.div`
  width: 110px;
  height: 100%;
  display: inline-flex;

  .card {
    &:not(:first-child) {
      margin-left: -30px;

      @media (min-width: 500px) {
        margin-left: -62px;
      }
    }

    img {
      height: 100%;
    }
  }
`;

export const DealArea = styled.div`
  width: 110px;
  height: 100%;
  display: inline-flex;
  flex-direction: row-reverse;
  cursor: url(${ClickableCursor}), pointer;

  .card {
    &:not(:last-child) {
      margin-left: -30px;

      @media (min-width: 500px) {
        margin-left: -62px;
      }
    }

    img {
      height: 100%;
    }
  }
`;

const colorChange = keyframes`
  0% {
    color: #FF3500;
  }

  20% {
    color: #F0EA00;
  }

  40% { 
    color: #00DB02; 
  }

  60% { 
    color: #00ABF6; 
  }

  80% { 
    color: #002FEB; 
  }

  100% { 
    color: #FF26E7; 
  }
`;

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
  animation: ${colorChange} 10s infinite;
`;

export const Window = styled.div`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 10px;
  margin-bottom: 10px;
  height: 140px;
  width: 270px;
  display: grid;
  grid-template-rows: 30px 1fr;
  grid-template-columns: 100%;
  border: 2px solid rgba(0, 102, 255, 1);
`;

export const TitleBar = styled.div`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  font-family: 'Trebuchet MS';
  background: linear-gradient(
    180deg,
    rgba(9, 151, 255, 1) 0%,
    rgba(0, 83, 238, 1) 8%,
    rgba(0, 80, 238, 1) 40%,
    rgba(0, 102, 255, 1) 88%,
    rgba(0, 102, 255, 1) 93%,
    rgba(0, 91, 255, 1) 95%,
    rgba(0, 61, 215, 1) 96%,
    rgba(0, 61, 215, 1) 100%
  );
  font-size: 13px;
  padding: 6px;
  color: white;
  display: flex;
  align-items: center;

  img {
    height: 100%;
  }
`;

export const CloseButton = styled.button`
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
  padding-left: 10px;
  padding-right: 10px;
  background-color: #ece9d8;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 0.6rem;
  line-height: 30px;

  button {
    font-size: 0.55rem;
    color: black;
    background-color: white;
    width: 60px;
    height: 20px;
    border: 1px solid black;
    border-radius: 3px;
    margin: 0 auto;

    &:hover {
      box-shadow: orange 0px 0px 0px 1px inset;
    }

    &:active {
      box-shadow: rgba(0, 102, 255, 1) 0px 0px 0px 1px inset;

      ${Window} {
        display: none;
      }
    }
  }
`;
