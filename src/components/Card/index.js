import React from 'react';
import { cardImages } from '../../constants';

const Card = React.forwardRef((props, ref) => {
  const { isClose, cardId } = props;

  return (
    <div className="card" ref={ref}>
      <img
        draggable={false} // Removes the preview created by dragging and holding the image.
        src={isClose ? cardImages[0] : cardImages[cardId]}
        alt="card"
      />
    </div>
  );
});

export default React.memo(Card);
