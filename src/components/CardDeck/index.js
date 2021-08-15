import React from 'react';
import Card from '../Card';
import * as Styled from './styles';

const CardDeck = () => {
  return (
    <Styled.Deck>
      <Card cardNo={0} />
      <Card cardNo={0} />
      <Card cardNo={0} />
      <Card cardNo={0} />
      <Card cardNo={3} />
    </Styled.Deck>
  );
};

export default CardDeck;
