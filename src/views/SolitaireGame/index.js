import React from 'react';
import XPWindow from '../../components/XPWindow/index';
import * as Styled from './styles';

const SolitaireGame = (props) => {
  const { setIsSolitaireActive } = props;
  console.log('dee');

  return (
    <XPWindow setIsSolitaireActive={setIsSolitaireActive}>
      <Styled.SolitaireBoard />
    </XPWindow>
  );
};

export default SolitaireGame;
