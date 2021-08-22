// Libraries
import React from 'react';
// Components | Utils
import { getHint } from '../../../utils/cardUtils';
import getSounds from '../../../utils/soundUtils';
// Assets
import * as Styled from './styles';

const HintArea = (props) => {
  const { setHint, cardDecks, gameStats, setGameStats } = props;

  const [hintSound, noHintSound] = getSounds('hint', 'no-hint');

  /*
  ====================================================
  =================== HANDLER ========================
  ====================================================
  */

  const handleClickHint = () => {
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
    <Styled.HintArea onClick={handleClickHint}>
      <Styled.Hint>
        <span>Score:</span>
        <span>{gameStats.score}</span>
      </Styled.Hint>
      <Styled.Hint>
        <span>Moves:</span>
        <span>{gameStats.moves}</span>
      </Styled.Hint>
    </Styled.HintArea>
  );
};

export default React.memo(HintArea);
