// Libraries
import React, { useState, createContext } from 'react';

export const DraggingContext = createContext();

const DraggingContextProvider = (props) => {
  const { children } = props;

  const [indicesOfSelectedCards, setIndicesOfSelectedCards] =
    useState({
      deckId: '',
      items: [],
    });

  /*
  ====================================================
  ==================== RENDER ========================
  ====================================================
  */

  return (
    <DraggingContext.Provider
      value={{
        indicesOfSelectedCards,
        setIndicesOfSelectedCards,
      }}
    >
      {children}
    </DraggingContext.Provider>
  );
};

export default DraggingContextProvider;
