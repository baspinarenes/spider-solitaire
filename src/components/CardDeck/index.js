import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Card from '../Card';
import * as Styled from './styles';

const CardDeck = React.forwardRef((props, ref) => {
  const { deckId, deck } = props;
  console.log(deck);
  return (
    <Styled.Deck ref={ref}>
      {deck.length !== 0 &&
        deck.cards.map((id, index) =>
          index < deck.cards.length - deck.visibleCardCount ? (
            <Card
              isClose
              key={`deck${deckId}${id}`}
              deckId={deckId}
              cardId={id}
            />
          ) : (
            <Draggable
              key={`deck${deckId}${id}`}
              draggableId={`deck${deckId}${id}${id}`}
              index={index}
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <Card deckId={deckId} cardId={id} />
                </div>
              )}
            </Draggable>
          )
        )}
    </Styled.Deck>
  );
});

export default CardDeck;
