// Library
import styled from 'styled-components';

export const DeckArea = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  justify-content: space-evenly;
  gap: 0.4vw;
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
