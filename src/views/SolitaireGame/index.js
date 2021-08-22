// Libraries
import React, { useContext } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
// Components | Utils
import { GameContext } from '../../contexts/GameContext';
import Window from '../../components/PreGame/Window';
import GameOver from '../../components/Game/GameOver';
import DeckArea from '../../components/Game/DeckArea';
import { moveCards } from '../../utils/cardUtils';
// Assets
import * as Styled from './styles';
import CompletedDeckArea from '../../components/Game/CompletedArea';
import HintArea from '../../components/Game/HintArea';
import DealArea from '../../components/Game/DealArea';

const SolitaireGame = () => {
  const {
    cardDecks,
    setCardDecks,
    setIndicesOfSelectedCards,
    gameStats,
    setGameStats,
    setHint,
  } = useContext(GameContext);

  /*
  ====================================================
  =================== HANDLER ========================
  ====================================================
  */

  const handleOnDragEnd = (result) => {
    const { source, destination } = result;

    setIndicesOfSelectedCards({
      deckId: '',
      items: [],
    });

    if (!destination) {
      return;
    }

    const sourceDeckId = source.droppableId;
    const destinationDeckId = destination.droppableId;

    if (sourceDeckId === destinationDeckId) {
      return;
    }

    const { newCardDecks, isThereACompletedDeck, isDragSuccessful } =
      moveCards(cardDecks, source, destination);

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
  =================== RENDER ========================
  ====================================================
  */

  return (
    <Window title="Spider Solitaire">
      <DragDropContext
        onDragEnd={handleOnDragEnd}
        onDragStart={handleOnDragStart}
      >
        <Styled.Board>
          <DeckArea cardDecks={cardDecks} />
          <Styled.BottomArea>
            <CompletedDeckArea
              completedDeckCount={gameStats.completedDeckCount}
            />
            <HintArea
              setHint={setHint}
              cardDecks={cardDecks}
              gameStats={gameStats}
              setGameStats={setGameStats}
            />
            <DealArea
              setCardDecks={setCardDecks}
              cardDecks={cardDecks}
            />
          </Styled.BottomArea>
          {gameStats.completedDeckCount === 8 && <GameOver />}
        </Styled.Board>
      </DragDropContext>
    </Window>
  );
};

export default SolitaireGame;
