// Libraries
import React, { useState, useEffect } from 'react';
// Components | Utils
import getTimeAsAMPM from '../../../utils/dateUtils';
// Assets
import * as Styled from './styles';
import MsnIcon from '../../../assets/images/msn-icon.webp';

const Toolbar = () => {
  const [time, setTime] = useState(getTimeAsAMPM());

  /*
  ====================================================
  ================== USE EFFECT ======================
  ====================================================
  */

  useEffect(() => {
    const timeInterval = setInterval(
      () => setTime(getTimeAsAMPM()),
      30000
    );
    return () => {
      clearInterval(timeInterval);
    };
  }, []);
  /*
  ====================================================
  ==================== RENDER ========================
  ====================================================
  */

  return (
    <Styled.Toolbar>
      <img src={MsnIcon} alt="msn icon" width="32" height="21" />
      <span>{time}</span>
    </Styled.Toolbar>
  );
};

export default Toolbar;
