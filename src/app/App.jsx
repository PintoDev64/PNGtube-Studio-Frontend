//Components
import AdminTool from './components/admin/Admintools';
import Settings from './components/settings/Settings';
import Main from './Main';

// Contexts
import GlobalComponent from './context/global/provider';

import './App.css';

function App() {
  return (
    <GlobalComponent>
      <main id="App">
        <AdminTool />
        <Settings />
        <Main />
      </main>
    </GlobalComponent>
  );
}

export default App;
