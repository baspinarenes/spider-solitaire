// Libraries
import React from 'react';
// Components | Utils
// Assets
import * as Styled from './styles';

const GameOver = (props) => {
  const { isGameFinished } = props;

  /*
  ====================================================
  =================== HANDLER ========================
  ====================================================
  */
  /*
  ====================================================
  =================== RENDER ========================
  ====================================================
  */

  return (
    <>
      <Styled.WinScreen isGameFinished={isGameFinished}>
        <span>You Won!</span>
      </Styled.WinScreen>
      <Styled.Window
        size={{ height: '140px', width: '320px' }}
        isGameFinished={isGameFinished}
      >
        <Styled.TitleBar>
          <span>asdsadsa</span>
          <Styled.CloseButton />
        </Styled.TitleBar>

        <Styled.WindowBody>sadsasd</Styled.WindowBody>
      </Styled.Window>
    </>
  );
};

export default React.memo(GameOver);
