import React, { useContext } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import XPWindow from '../../components/XPWindow';
import * as Styled from './styles';
import Card from '../../components/Card';
import DeckArea from '../../components/DeckArea';
import { GameContext } from '../../contexts/GameContext';
import { moveOneCard } from '../../utils/cardUtils';

const SolitaireGame = (props) => {
  const { setIsSolitaireActive } = props;
  const { cardDecks, setCardDecks } = useContext(GameContext);

  const handleOnDragEnd = (result) => {
    const { source, destination } = result;

    console.log(result);
    if (!destination) {
      return;
    }

    const sourceDeckId = source.droppableId;
    const sourceCardIndex = source.index;
    const destinationDeckId = destination.droppableId;
    const destinationCardIndex = destination.index;

    if (sourceDeckId === destinationDeckId) {
      return;
    }

    const cardNo = cardDecks[sourceDeckId].cards[sourceCardIndex];
    const parentCardNo =
      cardDecks[destinationDeckId].cards[destinationCardIndex - 1];

    /* 
    If the dragged card meets the conditions, it is moved from source to destination.
    For example, 2 comes after A. Since A has a value of 1, the next card must be 1 + 1 = 2.
    */
    const isNextCard = cardNo === parentCardNo + 1;

    if (isNextCard) {
      setCardDecks(
        moveOneCard(cardDecks, sourceDeckId, destinationDeckId)
      );
    }
  };

  return (
    <XPWindow setIsSolitaireActive={setIsSolitaireActive}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
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
            <Styled.DealArea>
              <Card isClose />
              <Card isClose />
              <Card isClose />
              <Card isClose />
              <Card isClose />
            </Styled.DealArea>
          </Styled.BottomArea>
        </Styled.Board>
      </DragDropContext>
    </XPWindow>
  );
};

export default SolitaireGame;
