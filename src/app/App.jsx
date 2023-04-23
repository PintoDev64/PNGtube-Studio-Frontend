import { useEffect, useState } from 'react';

//Components
import Main from './Main';
import AdminTool from './components/admin/Admintools';
import Settings from './components/settings/Settings';
import FullSreen from './components/executables/fullscreen';

// Contexts
import GlobalComponent from './context/global/provider';

// Css
import './App.css';

function App() {

  return (
    <GlobalComponent>
      <main id="App">
        <AdminTool />
        <Settings />
        <Main />
        <FullSreen />
      </main>
    </GlobalComponent>
  );
}

export default App;
