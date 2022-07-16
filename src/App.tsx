import React from 'react';

import Game from './components/Game';
import { GlobalStyle } from './global';

function App() {
  return (
    <>
      <Game rows={20} columns={20} />
      <GlobalStyle />
    </>
  );
}

export default App;
