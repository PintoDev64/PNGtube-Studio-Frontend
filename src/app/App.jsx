//Components
import Main from './Main';
import AdminTool from './components/admin/Admintools';
import Settings from './components/settings/Settings';
import Tolls from './components/controller/Tolls';

// Contexts
import GlobalComponent from './context/global/provider';
import AudioComponent from './context/audio/provider';
import ModelSettings from './context/content/provider';

// Css
import './App.css';

function App() {

  return (
    <GlobalComponent>
      <ModelSettings >
        <main id="App">
          <AudioComponent>
            <AdminTool />
            <Settings />
            <Main />
            <Tolls />
          </AudioComponent>
        </main>
      </ModelSettings>
    </GlobalComponent>
  );
}

export default App;
