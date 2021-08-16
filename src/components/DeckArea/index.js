import React, { useContext } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import * as Styled from './styles';
import { GameContext } from '../../contexts/GameContext';
import CardDeck from '../CardDeck';

const DeckArea = () => {
  const { cardDecks } = useContext(GameContext);

  return (
    <Styled.DeckArea>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((id) => (
        <Droppable key={`deck${id}`} droppableId={`deck${id}`}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <CardDeck deckId={id} deck={cardDecks[`deck${id}`]} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </Styled.DeckArea>
  );
};

export default DeckArea;
