import React, { useContext } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import useSound from 'use-sound';
import XPWindow from '../../components/XPWindow';
import * as Styled from './styles';
import Card from '../../components/Card';
import DeckArea from '../../components/DeckArea';
import { GameContext } from '../../contexts/GameContext';
import { moveCards, deal } from '../../utils/cardUtils';
import DealCardsSound from '../../assets/audios/deal-cards.ogg';

const SolitaireGame = (props) => {
  const { setIsSolitaireActive } = props;
  const {
    cardDecks,
    setCardDecks,
    setSelectedCards,
    dealingDecks,
    setDealingDecks,
    setCompletedDeckCount,
    completedDeckCount,
  } = useContext(GameContext);
  const [playDealCardsSound] = useSound(DealCardsSound, {
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

    const { newCardDecks, isThereACompletedDeck } = moveCards(
      cardDecks,
      source,
      destination
    );

    if (isThereACompletedDeck) {
      setCompletedDeckCount(completedDeckCount + 1);
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
                Array(completedDeckCount).fill(<Card cardId={1} />)
              )}
            </Styled.CompletedArea>
            <Styled.HintArea>
              <Styled.Hint>
                <span>Score:</span>
                <span>100</span>
              </Styled.Hint>
              <Styled.Hint>
                <span>Moves:</span>
                <span>2</span>
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
        </Styled.Board>
      </DragDropContext>
    </XPWindow>
  );
};

export default SolitaireGame;
