import styled from 'styled-components';

export const DeckArea = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);

  justify-content: space-evenly;
  gap: 1px;

  .card {
    height: 100%;
    width: auto;

    img {
      height: auto;
      width: 100%;
    }
  }

  @media (min-width: 500px) {
    grid-template-columns: repeat(10, 7vw);
    grid-template-rows: 1fr;
    gap: 10px;
  }
`;
