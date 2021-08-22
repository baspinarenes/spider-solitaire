// Libraries
import React, { useContext } from 'react';
// Components | Utils
import Card from '../Card';
import { deal } from '../../../utils/cardUtils';
import getSounds from '../../../utils/soundUtils';
// Assets
import * as Styled from './styles';
import { GameContext } from '../../../contexts/GameContext';

const DealArea = (props) => {
  const { setCardDecks, cardDecks } = props;
  const [cannotDealSound, dealSound] = getSounds(
    'cannot-deal',
    'deal'
  );
  const { dealingDecks, setDealingDecks } = useContext(GameContext);
  /*
  ====================================================
  =================== HANDLER ========================
  ====================================================
  */

  const handleDealClick = () => {
    dealSound.play();

    const [returnCardDecks, returnDealingDecks] = deal(
      cardDecks,
      dealingDecks,
      cannotDealSound
    );

    setCardDecks(returnCardDecks);
    setDealingDecks(returnDealingDecks);
  };

  /*
  ====================================================
  =================== RENDER ========================
  ====================================================
  */

  return (
    <Styled.DealArea
      onClick={dealingDecks.length ? handleDealClick : undefined}
    >
      {React.Children.toArray(
        Array(dealingDecks.length).fill(<Card isClose />)
      )}
    </Styled.DealArea>
  );
};

export default React.memo(DealArea);
