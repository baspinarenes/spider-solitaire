// Libraries
import React, { useContext } from 'react';
// Components | Utils
import { HintContext } from '../../../contexts/HintContext';
import { getHint } from '../../../utils/cardUtils';
import getSounds from '../../../utils/soundUtils';
// Assets
import * as Styled from './styles';

const HintArea = (props) => {
  const { cardDecks, gameStats, setGameStats } = props;

  const { setHint } = useContext(HintContext);

  const [hintSound, noHintSound] = getSounds('hint', 'no-hint');

  /*
  ====================================================
  =================== HANDLER ========================
  ====================================================
  */

  const handleHintClick = () => {
    const hint = getHint(cardDecks);

    if (hint) {
      hintSound.play();
      setHint({
        sourceDeckId: hint.sourceDeckId,
        sourceStartingIndex: hint.sourceStartingIndex,
        destinationDeckId: hint.destinationDeckId,
        destinationStartingIndex: hint.destinationStartingIndex,
      });

      const previousGameStats = { ...gameStats };
      previousGameStats.score -= 10;

      setGameStats(previousGameStats);
    } else {
      noHintSound.play();
    }
  };

  /*
  ====================================================
  =================== RENDER ========================
  ====================================================
  */

  return (
    <Styled.HintArea onClick={handleHintClick} data-cy="hint-area">
      <Styled.Hint>
        <span>Score:</span>
        <span data-cy="score-span">{gameStats?.score}</span>
      </Styled.Hint>
      <Styled.Hint>
        <span>Moves:</span>
        <span data-cy="moves-span">{gameStats?.moves}</span>
      </Styled.Hint>
    </Styled.HintArea>
  );
};

export default React.memo(HintArea);
