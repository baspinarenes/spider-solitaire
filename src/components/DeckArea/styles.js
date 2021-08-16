import styled from 'styled-components';

export const DeckArea = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 7vw);
  justify-content: space-evenly;
  gap: 1px;

  @media (min-width: 500px) {
    gap: 10px;
  }

  .card {
    height: auto;
    width: inherit;
    img {
      height: auto;
      width: 100%;
    }
  }
`;
