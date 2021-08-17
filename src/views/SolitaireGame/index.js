import React, { useContext } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import XPWindow from '../../components/XPWindow';
import * as Styled from './styles';
import Card from '../../components/Card';
import DeckArea from '../../components/DeckArea';
import { GameContext } from '../../contexts/GameContext';
import { moveCards, deal } from '../../utils/cardUtils';

const SolitaireGame = (props) => {
  const { setIsSolitaireActive } = props;
  const {
    cardDecks,
    setCardDecks,
    setSelectedCards,
    dealingDecks,
    setDealingDecks,
  } = useContext(GameContext);

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

    setCardDecks(moveCards(cardDecks, source, destination));
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
              <Card cardId={1} />
              <Card cardId={1} />
              <Card cardId={1} />
              <Card cardId={1} />
              <Card cardId={1} />
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
              {Array(dealingDecks.length).fill(<Card isClose />)}
            </Styled.DealArea>
          </Styled.BottomArea>
        </Styled.Board>
      </DragDropContext>
    </XPWindow>
  );
};

export default SolitaireGame;
