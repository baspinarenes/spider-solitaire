// Libraries
import React, { useState, useEffect, createContext } from 'react';

export const HintContext = createContext();

const HintContextProvider = (props) => {
  const { children } = props;

  const [hint, setHint] = useState({});

  /*
  ====================================================
  ================== USE EFFECT ======================
  ====================================================
  */

  useEffect(() => {
    let timeout;
    if (Object.keys(hint).length > 0) {
      timeout = setTimeout(() => {
        setHint({});
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [hint]);

  /*
  ====================================================
  ==================== RENDER ========================
  ====================================================
  */

  return (
    <HintContext.Provider
      value={{
        hint,
        setHint,
      }}
    >
      {children}
    </HintContext.Provider>
  );
};

export default HintContextProvider;
