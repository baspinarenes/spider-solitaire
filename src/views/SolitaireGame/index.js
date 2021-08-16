import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import XPWindow from '../../components/XPWindow';
import * as Styled from './styles';
import Card from '../../components/Card';
import DeckArea from '../../components/DeckArea';

const SolitaireGame = (props) => {
  const { setIsSolitaireActive } = props;

  const handleOnDragEnd = (result) => {
    const { destination } = result;

    if (!destination) {
      return;
    }
    console.log(result);
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
