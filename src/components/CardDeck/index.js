import React, { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import useSound from 'use-sound';
import Card from '../Card';
import * as Styled from './styles';
import { GameContext } from '../../contexts/GameContext';
import { getIndexWhichNextCardsDraggable } from '../../utils/cardUtils';
import MouseDownSound from '../../assets/audios/mouse-down.ogg';

const CardDeck = React.forwardRef((props, ref) => {
  const { deckId, deck } = props;
  const { selectedCards, hint } = useContext(GameContext);
  const [playMouseDownSound] = useSound(MouseDownSound, {
    volume: 1,
  });

  const handleMouseDownFromCard = (e) => {
    e.preventDefault();
    playMouseDownSound();
  };

  function getStyle(style, snapshot, dId, index) {
    /* 
    This function overrides the default gliding behavior of the react-beautiful-dnd 
    package when the drag is above the other draggable object.
    */

    if (snapshot.isDropAnimating) {
      return {
        ...style,
        // cannot be 0, but make it super tiny
        transitionDuration: '0.001s',
      };
    }

    if (snapshot.isDragging) {
      // We do not apply it to the being dragged object so that the drag behavior can continue.
      return style;
    }

    if (
      selectedCards.deckId === dId &&
      selectedCards.items.includes(index)
    ) {
      return {
        ...style,
        display: 'none',
        // We ovveride the "translate(... px)" that performs the sliding behavior as "none".
        transform: 'none',
      };
    }

    return {
      ...style,
      // We ovveride the "translate(... px)" that performs the sliding behavior as "none".
      transform: 'none',
      filter:
        (hint.sourceDeckId === dId &&
          hint.sourceStartingIndex <= index) ||
        (hint.destinationDeckId === dId &&
          hint.destinationStartingIndex <= index)
          ? 'invert(100%)'
          : '',
      transition:
        hint.destinationDeckId === dId &&
        hint.destinationStartingIndex <= index
          ? 'filter 400ms 300ms'
          : '',
    };
  }

  let indexWhichNextCardsDraggable;

  if ('cards' in deck) {
    indexWhichNextCardsDraggable =
      getIndexWhichNextCardsDraggable(deck);
  }

  return (
    'cards' in deck && (
      <Styled.Deck ref={ref} deckLength={deck.cards.length}>
        <div className="empty-border" />
        {deck.cards.map((id, index) => (
          <Draggable
            key={`deck${deckId}${index}`}
            draggableId={`deck${deckId}${index}`}
            index={index}
            isDragDisabled={index < indexWhichNextCardsDraggable}
          >
            {(provided, snapshot) => {
              return (
                <div
                  role="none"
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={getStyle(
                    provided.draggableProps.style,
                    snapshot,
                    `deck${deckId}`,
                    index
                  )}
                  onMouseDown={
                    index >= indexWhichNextCardsDraggable
                      ? handleMouseDownFromCard
                      : undefined
                  }
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
        ))}
      </Styled.Deck>
    )
  );
});

export default CardDeck;
