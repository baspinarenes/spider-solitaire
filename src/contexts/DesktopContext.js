// Libraries
import React, { useState, createContext } from 'react';

export const DesktopContext = createContext();

const DesktopContextProvider = (props) => {
  const { children } = props;

  const [isGameRunning, setIsGameRunning] = useState(false);

  /*
  ====================================================
  ==================== RENDER ========================
  ====================================================
  */

  return (
    <DesktopContext.Provider
      value={{ isGameRunning, setIsGameRunning }}
    >
      {children}
    </DesktopContext.Provider>
  );
};

export default DesktopContextProvider;
