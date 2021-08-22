import React, { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { cardImages } from '../../../utils/cardUtils';
import getSounds from '../../../utils/soundUtils';
import { GameContext } from '../../../contexts/GameContext';
import * as Styled from './styles';

const Card = (props) => {
  const { index, deckNo, cardNo, isClose, isDragDisabled } = props;

  const { indicesOfSelectedCards, hint } = useContext(GameContext);

  const [mouseDownSound] = getSounds('mouse-down');

  const handleMouseDownFromCard = (e) => {
    e.preventDefault();
    mouseDownSound.play();
  };

  function getStyle(style, snapshot) {
    /* 
    This function overrides the default gliding behavior of the react-beautiful-dnd 
    package when the drag is above the other draggable object.
    */
    const dId = `deck${deckNo}`;

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
      indicesOfSelectedCards.deckId === dId &&
      indicesOfSelectedCards.items.includes(index)
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

  console.log('RENDER CARD');

  return deckNo ? (
    <Draggable
      draggableId={`deck${deckNo}${index}`}
      index={index}
      isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => {
        return (
          <Styled.CardContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getStyle(provided.draggableProps.style, snapshot)}
            onMouseDown={
              !isDragDisabled ? handleMouseDownFromCard : undefined
            }
          >
            <div className="card">
              <img
                draggable={false} // Removes the preview created by dragging and holding the image.
                src={isClose ? cardImages[0] : cardImages[cardNo]}
                alt="card"
              />
            </div>
          </Styled.CardContainer>
        );
      }}
    </Draggable>
  ) : (
    <div className="card">
      <img
        draggable={false} // Removes the preview created by dragging and holding the image.
        src={isClose ? cardImages[0] : cardImages[cardNo]}
        alt="card"
      />
    </div>
  );
};

export default React.memo(Card);
