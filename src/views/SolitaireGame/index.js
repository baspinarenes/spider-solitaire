import React from 'react';
import XPWindow from '../../components/XPWindow/index';

const SolitaireGame = (props) => {
  const { setIsSolitaireActive } = props;
  console.log('dee');

  return <XPWindow setIsSolitaireActive={setIsSolitaireActive} />;
};

export default SolitaireGame;
