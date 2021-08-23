// Libraries
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
// Components | Utils
import { cardImages } from '../../../utils/cardUtils';
import getSounds from '../../../utils/soundUtils';
// Assets
import * as Styled from './styles';

const Card = (props) => {
  const {
    index,
    deckNo,
    cardNo,
    isClose,
    isDragDisabled,
    isInSelectedCards,
    isSourceInHint,
    isDestinationInHint,
  } = props;

  const [mouseDownSound] = getSounds('mouse-down');

  const handleMouseDownFromCard = (e) => {
    e.preventDefault();
    mouseDownSound.play();
  };

  /*
  ====================================================
  ==================== FUNCTIONS =====================
  ====================================================
  */

  function getStyle(style, snapshot) {
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

    if (isInSelectedCards) {
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
        isSourceInHint || isDestinationInHint ? 'invert(100%)' : '',
      transition: isDestinationInHint ? 'filter 400ms 300ms' : '',
    };
  }

  /*
  ====================================================
  ==================== RENDER ========================
  ====================================================
  */

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
