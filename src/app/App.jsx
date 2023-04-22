import { useEffect, useState } from 'react';

//Components
import AdminTool from './components/admin/Admintools';
import Settings from './components/settings/Settings';
import Main from './Main';

// Contexts
import GlobalComponent from './context/global/provider';

// Css
import './App.css';

function App() {

  const [FullScreen, setFullScreen] = useState(false);

  function handlerFullscreen(event) {
    console.log(event);
    if (event.key === '\x06') {
      setFullScreen(!FullScreen)
      if (document.body.mozRequestFullScreen) {
        document.body.mozRequestFullScreen();
      } else {
        document.body.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keypress', handlerFullscreen);
  }, [])


  return (
    <GlobalComponent>
      <main id="App">
        <AdminTool styleState={
          FullScreen && {
            visibility: 'hidden',
            height: 0
          }
        } />
        <Settings />
        <Main />
      </main>
    </GlobalComponent>
  );
}

export default App;
