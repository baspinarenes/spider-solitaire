import React, { useContext } from 'react';
import * as Styled from './styles';
import Deck from '../Deck';
import { GameContext } from '../../../contexts/GameContext';

const DeckArea = () => {
  const { cardDecks } = useContext(GameContext);
  console.log('RENDER DECKAREA');

  console.log(cardDecks.deck3);

  return (
    <Styled.DeckArea>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((no) => (
        <Deck key={no} deckNo={no} deck={cardDecks[`deck${no}`]} />
      ))}
    </Styled.DeckArea>
  );
};

export default DeckArea;
