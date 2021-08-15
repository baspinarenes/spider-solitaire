import React from 'react';
import XPWindow from '../../components/XPWindow';
import * as Styled from './styles';
import Card from '../../components/Card';
import CardDeck from '../../components/CardDeck';

const SolitaireGame = (props) => {
  const { setIsSolitaireActive } = props;

  return (
    <XPWindow setIsSolitaireActive={setIsSolitaireActive}>
      <Styled.Board>
        <Styled.DeckArea>
          <CardDeck />
          <CardDeck />
          <CardDeck />
          <CardDeck />
          <CardDeck />
          <CardDeck />
          <CardDeck />
          <CardDeck />
          <CardDeck />
          <CardDeck />
        </Styled.DeckArea>
        <Styled.BottomArea>
          <Styled.CompletedArea>
            <Card cardNo={13} />
            <Card cardNo={13} />
            <Card cardNo={13} />
            <Card cardNo={13} />
            <Card cardNo={13} />
          </Styled.CompletedArea>
          <Styled.HintArea>
            <Styled.Hint>
              <span>Score:</span>
              <span>100</span>
            </Styled.Hint>
            <Styled.Hint>
              <span>Moves:</span>
              <span>2</span>
            </Styled.Hint>
          </Styled.HintArea>
          <Styled.DealArea>
            <Card cardNo={0} />
            <Card cardNo={0} />
            <Card cardNo={0} />
            <Card cardNo={0} />
            <Card cardNo={0} />
          </Styled.DealArea>
        </Styled.BottomArea>
      </Styled.Board>
    </XPWindow>
  );
};

export default SolitaireGame;
