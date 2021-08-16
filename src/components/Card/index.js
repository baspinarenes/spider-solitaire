import React from 'react';
import { cardImages } from '../../constants';

const Card = React.forwardRef((props, ref) => {
  const { isClose, cardId } = props;

  return (
    <div className="card" ref={ref}>
      <img
        draggable={false}
        src={isClose ? cardImages[0] : cardImages[cardId]}
        alt="card"
        width="70"
        height="96"
      />
    </div>
  );
});

export default React.memo(Card);
