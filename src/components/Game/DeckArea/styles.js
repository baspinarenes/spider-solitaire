// Libraries
import styled from 'styled-components';

export const DeckArea = styled.div`
  display: grid;
  gap: 0.4vw;
  grid-template-columns: repeat(10, 1fr);
  justify-content: space-evenly;
  padding: 0 0.9vw;

  .card {
    height: 100%;
    width: auto;

    img {
      height: auto;
      width: 100%;
    }
  }

  @media (min-width: ${(props) =>
      props.theme.breakpoints.smallTablet}) {
    grid-template-rows: 1fr;
  }
`;

export const CardDeckContainer = styled.div`
  height: fit-content;
`;
