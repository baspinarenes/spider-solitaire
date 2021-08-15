import React from 'react';
import { cardImages } from '../../constants';

const Card = (props) => {
  const { cardNo } = props;

  return (
    <div className="card">
      <img
        src={cardImages[cardNo]}
        alt="card"
        width="70"
        height="96"
      />
    </div>
  );
};

export default Card;
