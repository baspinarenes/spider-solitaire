// Libraries
import React, { useContext } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
// Components | Utils
import { GameContext } from '../../../contexts/GameContext';
import { DraggingContext } from '../../../contexts/DraggingContext';
import Deck from '../Deck';
import { moveCards } from '../../../utils/cardUtils';
// Assets
import * as Styled from './styles';

const DeckArea = () => {
  const { cardDecks, gameStats, setGameStats, setCardDecks } =
    useContext(GameContext);
  const { setIndicesOfSelectedCards } = useContext(DraggingContext);

  /*
  ====================================================
  =================== HANDLER ========================
  ====================================================
  */

  const handleOnDragEnd = (result) => {
    const { source, destination } = result;

    // Cards saved during drag are cleared.
    setIndicesOfSelectedCards({
      deckId: '',
      items: [],
    });

    // Saves dragged cards.
    if (!destination) {
      return;
    }

    const sourceDeckId = source.droppableId;
    const destinationDeckId = destination.droppableId;

    // Do nothing if the deck from which the card was drawn is the
    // same as the deck it was dragged into.
    if (sourceDeckId === destinationDeckId) {
      return;
    }

    const { newCardDecks, isThereACompletedDeck, isDragSuccessful } =
      moveCards(cardDecks, source, destination);

    // Update list if drag is successful.
    if (isDragSuccessful) {
      const previousGameStats = { ...gameStats };
      previousGameStats.moves += 1;
      previousGameStats.score -= 1;

      if (isThereACompletedDeck) {
        previousGameStats.completedDeckCount += 1;
        previousGameStats.score += 100;
      }

      setGameStats(previousGameStats);
      setCardDecks(newCardDecks);
    }
  };

  const handleOnDragStart = (result) => {
    const { source } = result;

    const sourceCardIndex = source.index;
    const sourceDeckId = source.droppableId;
    const sourceDeck = { ...cardDecks[sourceDeckId] };

    // Saves dragged cards.
    setIndicesOfSelectedCards({
      deckId: sourceDeckId,
      items: Array.from(
        {
          length: sourceDeck.cards.length - sourceCardIndex,
        },
        (_, i) => i + sourceCardIndex
      ),
    });
  };

  /*
  ====================================================
  ==================== RENDER ========================
  ====================================================
  */

  return (
    <DragDropContext
      onDragEnd={handleOnDragEnd}
      onDragStart={handleOnDragStart}
    >
      <Styled.DeckArea>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((no) => (
          <Deck key={no} deckNo={no} deck={cardDecks[`deck${no}`]} />
        ))}
      </Styled.DeckArea>
    </DragDropContext>
  );
};

export default DeckArea;
