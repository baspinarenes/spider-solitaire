import styled from 'styled-components';
import SolitaireBackground from '../../assets/images/solitaire-background.png';

export const Board = styled.div`
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

export const DeckArea = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 3px;

  .card {
    height: auto;
    width: inherit;
    img {
      height: auto;
      width: 100%;
    }
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

export const DealArea = styled.div`
  height: inherit;
  width: 130px;
  display: grid;
  grid-template-columns: repeat(11, 10px);
  align-items: center;
  direction: rtl;

  .card {
    height: inherit;
    width: auto;
    img {
      height: 100%;
      width: auto;
    }
  }
`;

export const CompletedArea = styled(DealArea)`
  direction: ltr;
`;
