import React, { useContext } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import useSound from 'use-sound';
import XPWindow from '../../components/XPWindow';
import * as Styled from './styles';
import Card from '../../components/Card';
import DeckArea from '../../components/DeckArea';
import { GameContext } from '../../contexts/GameContext';
import { moveCards, deal, getHint } from '../../utils/cardUtils';
import DealCardsSound from '../../assets/audios/deal-cards.ogg';
import HintSound from '../../assets/audios/hint.ogg';
import NoHintSound from '../../assets/audios/no-hint.ogg';
import WinSound from '../../assets/audios/win.ogg';

const SolitaireGame = (props) => {
  const { setIsSolitaireActive } = props;

  const {
    cardDecks,
    setCardDecks,
    setSelectedCards,
    dealingDecks,
    setDealingDecks,
    gameStats,
    setGameStats,
    setHint,
  } = useContext(GameContext);

  const [playDealCardsSound] = useSound(DealCardsSound, {
    volume: 1,
  });

  const [playHintSound] = useSound(HintSound, {
    volume: 1,
  });

  const [playNoHintSound] = useSound(NoHintSound, {
    volume: 1,
  });

  const [playWinSound] = useSound(WinSound, {
    volume: 1,
  });

  const handleOnDragEnd = (result) => {
    const { source, destination } = result;

    setSelectedCards({
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
    }

    setCardDecks(newCardDecks);
  };

  const handleOnDragStart = (result) => {
    const { source } = result;

    const sourceCardIndex = source.index;
    const sourceDeckId = source.droppableId;
    const sourceDeck = { ...cardDecks[sourceDeckId] };

    setSelectedCards({
      deckId: sourceDeckId,
      items: Array.from(
        {
          length: sourceDeck.cards.length - sourceCardIndex,
        },
        (_, i) => i + sourceCardIndex
      ),
    });
  };

  const handleDealClick = () => {
    playDealCardsSound();
    const [returnCardDecks, returnDealingDecks] = deal(
      cardDecks,
      dealingDecks
    );
    setCardDecks(returnCardDecks);
    setDealingDecks(returnDealingDecks);
  };

  const handleClickHint = () => {
    const hint = getHint(cardDecks);

    if (hint) {
      playHintSound();
      setHint({
        sourceDeckId: hint.sourceDeckId,
        sourceStartingIndex: hint.sourceStartingIndex,
        destinationDeckId: hint.destinationDeckId,
        destinationStartingIndex: hint.destinationStartingIndex,
      });
    } else {
      playNoHintSound();
    }
  };

  let isGameFinished = false;

  if (gameStats.completedDeckCount === 8) {
    playWinSound();
    isGameFinished = true;
  }

  return (
    <XPWindow setIsSolitaireActive={setIsSolitaireActive}>
      <DragDropContext
        onDragEnd={handleOnDragEnd}
        onDragStart={handleOnDragStart}
      >
        <Styled.Board>
          <DeckArea />
          <Styled.BottomArea>
            <Styled.CompletedArea>
              {React.Children.toArray(
                Array(gameStats.completedDeckCount).fill(
                  <Card cardId={1} />
                )
              )}
            </Styled.CompletedArea>
            <Styled.HintArea onClick={handleClickHint}>
              <Styled.Hint>
                <span>Score:</span>
                <span>{gameStats.score}</span>
              </Styled.Hint>
              <Styled.Hint>
                <span>Moves:</span>
                <span>{gameStats.moves}</span>
              </Styled.Hint>
            </Styled.HintArea>
            <Styled.DealArea
              onClick={
                dealingDecks.length ? handleDealClick : undefined
              }
            >
              {React.Children.toArray(
                Array(dealingDecks.length).fill(<Card isClose />)
              )}
            </Styled.DealArea>
          </Styled.BottomArea>
          <Styled.WinScreen isGameFinished={isGameFinished}>
            <span>You Won!</span>
          </Styled.WinScreen>
        </Styled.Board>
      </DragDropContext>
    </XPWindow>
  );
};

export default SolitaireGame;
