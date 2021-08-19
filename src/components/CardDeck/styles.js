import styled from 'styled-components';

export const Deck = styled.div`
  display: grid;
  grid-template-rows: repeat(27, min(16px, 2.5vw));
  max-width: 71px;
  position: relative;

  .empty-border {
    position: absolute;
    box-shadow: inset 0 0 0 2px white;
    top: 0;
    left: 0;
    width: 100%;
    height: 6.3vw;
    z-index: 0;
    border-radius: 4px;
  }

  div {
    z-index: 1;
  }

  @media (min-width: 500px) {
    grid-template-rows: repeat(
      ${(props) => props.deckLength + 5},
      min(17px, 3vh)
    );
  }
`;

/* 
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
  box-shadow: inset 0 0 0 2px white;
`;

/*
import styled from 'styled-components';

export const Deck = styled.div`
  display: grid;
  grid-template-rows: repeat(15, min(16px, 2.5vw));
  max-width: 71px;

  @media (min-width: 500px) {
    grid-template-rows: repeat(27, min(16px, 1vw));
  }
`;

*/
