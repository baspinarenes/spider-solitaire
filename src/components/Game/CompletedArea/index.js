// Libraries
import React from 'react';
// Components | Utils
import Card from '../Card';
// Assets
import * as Styled from './styles';

const CompletedDeckArea = (props) => {
  const { completedDeckCount } = props;

  /*
  ====================================================
  ==================== RENDER ========================
  ====================================================
  */

  return (
    <Styled.CompletedDeckArea>
      {React.Children.toArray(
        Array(completedDeckCount).fill(<Card cardNo={1} />)
      )}
    </Styled.CompletedDeckArea>
  );
};

export default React.memo(CompletedDeckArea);
