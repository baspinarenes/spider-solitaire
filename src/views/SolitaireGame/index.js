import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import XPWindow from '../../components/XPWindow';
import * as Styled from './styles';
import Card from '../../components/Card';
import GameContextProvider from '../../contexts/GameContext';
import DeckArea from '../../components/DeckArea';

const SolitaireGame = (props) => {
  const { setIsSolitaireActive } = props;

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    console.log(result);
  };

  return (
    <GameContextProvider>
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
    </GameContextProvider>
  );
};

export default SolitaireGame;
