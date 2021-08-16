import styled from 'styled-components';

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
