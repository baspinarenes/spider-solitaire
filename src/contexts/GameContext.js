// Libraries
import React, { useState, useEffect, createContext } from 'react';
// Components | Utils
import { getRandomDecks } from '../utils/cardUtils';

export const GameContext = createContext();

const GameContextProvider = (props) => {
  const { children } = props;

  const [cardDecks, setCardDecks] = useState({
    deck1: {},
    deck2: {},
    deck3: {},
    deck4: {},
    deck5: {},
    deck6: {},
    deck7: {},
    deck8: {},
    deck9: {},
    deck10: {},
  });
  const [dealingDecks, setDealingDecks] = useState([]);
  const [isAnyDragging, setIsAnyDragging] = useState(false);
  const [gameStats, setGameStats] = useState({
    completedDeckCount: 0,
    score: 500,
    moves: 0,
  });

  /*
  ====================================================
  ================== USE EFFECT ======================
  ====================================================
  */

  useEffect(() => {
    const [cDecks, dDecks] = getRandomDecks();
    setCardDecks(cDecks);
    setDealingDecks(dDecks);
  }, []);

  /*
  ====================================================
  ==================== RENDER ========================
  ====================================================
  */

  return (
    <GameContext.Provider
      value={{
        cardDecks,
        setCardDecks,
        isAnyDragging,
        setIsAnyDragging,
        dealingDecks,
        setDealingDecks,
        gameStats,
        setGameStats,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
