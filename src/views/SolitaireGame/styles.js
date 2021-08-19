import styled, { keyframes } from 'styled-components';
import SolitaireBackground from '../../assets/images/solitaire-background.png';
import ClickableCursor from '../../assets/cursors/cursor-clickable.cur';

export const Board = styled.div`
  position: relative;
  height: 100%;
  padding: 10px;
  background-image: url(${SolitaireBackground});
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
  flex-grow: 1;
  max-width: 180px;
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
  }
`;

export const Hint = styled.div`
  padding: 2px;
  background-color: green;
  display: flex;
  gap: 10px;
  font-weight: bold;

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
        margin-left: -43px;
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
  background-color: white;
  height: 100%;
  display: grid;
  grid-template-rows: 30px 20px 1fr;
  grid-template-columns: 100%;
`;

export const TitleBar = styled.div`
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
