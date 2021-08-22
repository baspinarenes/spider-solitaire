import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import * as Styled from './styles';
import CardDeck from '../CardDeck';

const DeckArea = (props) => {
  const { cardDecks } = props;

  return (
    <Styled.DeckArea>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((id) => (
        <Droppable key={`deck${id}`} droppableId={`deck${id}`}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ height: 'fit-content' }}
            >
              <CardDeck deckId={id} deck={cardDecks[`deck${id}`]} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </Styled.DeckArea>
  );
};

export default React.memo(DeckArea);
