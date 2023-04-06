// Node Modules
import { BrowserRouter } from 'react-router-dom';

//Components
import AdminTool from './components/admin/Admintools';
import Settings from './components/settings/Settings';

// Contexts
import GlobalComponent from './context/global/provider';

import './App.css';

function App() {
  return (
    <GlobalComponent>
      <main id="App">
        <AdminTool />
        <BrowserRouter>
          <Settings />
        </BrowserRouter>
        Hola mundo
      </main>
    </GlobalComponent>
  );
}

export default App;
