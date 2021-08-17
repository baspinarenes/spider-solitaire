import React, { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Card from '../Card';
import * as Styled from './styles';
import CardPlaceholder from '../../assets/images/cards/card-placeholder.png';
import { GameContext } from '../../contexts/GameContext';
import { getIndexWhichNextCardsDraggable } from '../../utils/cardUtils';

const CardDeck = React.forwardRef((props, ref) => {
  const { deckId, deck } = props;
  const { selectedCards } = useContext(GameContext);

  function getStyle(style, snapshot, dId, id) {
    /* 
    This function overrides the default gliding behavior of the react-beautiful-dnd 
    package when the drag is above the other draggable object.
    */

    if (snapshot.isDragging) {
      // We do not apply it to the being dragged object so that the drag behavior can continue.
      return style;
    }

    if (
      selectedCards.deckId === dId &&
      selectedCards.items.includes(id)
    ) {
      return {
        ...style,
        // We ovveride the "translate(... px)" that performs the sliding behavior as "none".
        display: 'none',
        transform: 'none',
      };
    }

    return {
      ...style,
      // We ovveride the "translate(... px)" that performs the sliding behavior as "none".
      transform: 'none',
    };
  }

  let indexWhichNextCardsDraggable;

  if ('cards' in deck) {
    indexWhichNextCardsDraggable =
      getIndexWhichNextCardsDraggable(deck);
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
          deck.cards.map((id, index) => (
            <Draggable
              key={`deck${deckId}${index}`}
              draggableId={`deck${deckId}${index}`}
              index={index}
              isDragDisabled={index < indexWhichNextCardsDraggable}
            >
              {(provided, snapshot) => {
                return (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getStyle(
                      provided.draggableProps.style,
                      snapshot,
                      `deck${deckId}`,
                      index
                    )}
                  >
                    <Card
                      deckId={deckId}
                      cardId={id}
                      isClose={
                        index <
                        deck.cards.length - deck.visibleCardCount
                      }
                    />
                  </div>
                );
              }}
            </Draggable>
          ))
        )}
      </Styled.Deck>
    )
  );
});

export default CardDeck;
