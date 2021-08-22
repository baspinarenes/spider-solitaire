// Libraries
import styled from 'styled-components';
// Assets

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
