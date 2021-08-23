// Libraries
import styled from 'styled-components';

export const Board = styled.div`
  background-image: url(${`${process.env.PUBLIC_URL}/solitaire-background.webp`});
  background-size: fill;
  display: grid;
  grid-template-rows: 1fr 50px;
  height: 100%;
  padding: 10px;
  position: relative;

  @media (min-width: ${(props) =>
      props.theme.breakpoints.smallTablet}) {
    grid-template-rows: 1fr 100px;
    padding: 20px 30px;
  }
`;

export const BottomArea = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
  width: 100%;

  @media (min-width: ${(props) =>
      props.theme.breakpoints.smallTablet}) {
    height: 100px;
  }
`;
