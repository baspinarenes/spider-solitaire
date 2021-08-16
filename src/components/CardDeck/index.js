import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Card from '../Card';
import * as Styled from './styles';
import CardPlaceholder from '../../assets/images/cards/card-placeholder.png';

const CardDeck = React.forwardRef((props, ref) => {
  const { deckId, deck } = props;

  function getStyle(style, snapshot) {
    /* 
    This function overrides the default gliding behavior of the react-beautiful-dnd 
    package when the drag is above the other draggable object.
    */

    if (snapshot.isDragging) {
      // We do not apply it to the being dragged object so that the drag behavior can continue.
      return style;
    }

    return {
      ...style,
      // We ovveride the "translate(... px)" that performs the sliding behavior as "none".
      transform: 'none',
    };
  }

  return (
    'cards' in deck && (
      <Styled.Deck ref={ref}>
        {deck.cards.length === 0 ? (
          <img
            src={CardPlaceholder}
            alt=""
            style={{ width: '100%', maxWidth: '74px' }}
          />
        ) : (
          deck.cards.map((id, index) =>
            index < deck.cards.length - deck.visibleCardCount ? (
              <Card
                isClose
                key={`deck${deckId}${index}`}
                deckId={deckId}
                cardId={id}
              />
            ) : (
              <Draggable
                key={`deck${deckId}${index}`}
                draggableId={`deck${deckId}${index}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getStyle(
                      provided.draggableProps.style,
                      snapshot
                    )}
                  >
                    <Card deckId={deckId} cardId={id} />
                  </div>
                )}
              </Draggable>
            )
          )
        )}
      </Styled.Deck>
    )
  );
});

export default CardDeck;
