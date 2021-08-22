// Libraries
import React, { useContext } from 'react';
// Components | Utils
import Introduction from './views/Introduction';
import Desktop from './views/Desktop';
import { UserContext } from './contexts/UserContext';
import DesktopContextProvider from './contexts/DesktopContext';

function App() {
  const { isUserSelected } = useContext(UserContext);

  /*
  ====================================================
  ==================== RENDER ========================
  ====================================================
  */

  return (
    <div id="app">
      {isUserSelected ? (
        <DesktopContextProvider>
          <Desktop />
        </DesktopContextProvider>
      ) : (
        <Introduction />
      )}
    </div>
  );
}

export default App;
