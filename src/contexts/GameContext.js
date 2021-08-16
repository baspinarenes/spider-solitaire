import React, { useState, useEffect, createContext } from 'react';
import { getRandomDecks } from '../utils/cardUtils';

export const GameContext = createContext();

const GameContextProvider = (props) => {
  const { children } = props;

  const [cardDecks, setCardDecks] = useState({
    deck1: [],
    deck2: [],
    deck3: [],
    deck4: [],
    deck5: [],
    deck6: [],
    deck7: [],
    deck8: [],
    deck9: [],
    deck10: [],
    dealDeck1: [],
    dealDeck2: [],
    dealDeck3: [],
    dealDeck4: [],
    dealDeck5: [],
  });

  const [isAnyDragging, setIsAnyDragging] = useState(false);
  const [selectedCards, setSelectedCards] = useState({
    deckId: '',
    items: [],
  });

  useEffect(() => {
    setCardDecks(getRandomDecks());
  }, []);

  return (
    <GameContext.Provider
      value={{
        cardDecks,
        setCardDecks,
        isAnyDragging,
        setIsAnyDragging,
        selectedCards,
        setSelectedCards,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
