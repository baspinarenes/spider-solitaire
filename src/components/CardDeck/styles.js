import styled from 'styled-components';

export const Deck = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: inset 0 0 0 2px white;
  max-width: 71px;
  min-height: 42.05px;
  height: 12.5vw;
  max-height: 96px;
  border-radius: 4px;

  div {
    &:not(:first-child) {
      margin-top: -115%;
    }
  }

  @media (min-width: 500px) {
    height: 9vw;
  }
`;
