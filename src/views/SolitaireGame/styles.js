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
  grid-template-rows: 1fr 70px;

  @media (min-width: 500px) {
    padding: 20px 30px;
  }

  @media (min-width: 800px) {
    grid-template-rows: 1fr 100px;
  }
`;

export const BottomArea = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 800px) {
    height: 100px;
  }
`;

export const HintArea = styled.div`
  padding: 7px;
  height: 100%;
  max-width: 180px;
  min-width: 100px;
  flex-grow: 1;
  background-color: green;
  border: 1px solid black;
  color: white;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: url(${ClickableCursor}), pointer;
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
  height: inherit;
  width: 130px;
  display: grid;
  grid-template-columns: repeat(11, 10px);
  align-items: center;
  direction: ltr;

  .card {
    height: inherit;
    width: auto;
    img {
      height: 100%;
      width: auto;
    }
  }
`;

export const DealArea = styled(CompletedArea)`
  direction: rtl;
  cursor: url(${ClickableCursor}), pointer;
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
  height: 100%;
  background-color: white;
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
