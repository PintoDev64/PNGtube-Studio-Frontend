// Node Modules
import { BrowserRouter } from 'react-router-dom';

//Components
import AdminTool from './components/admin/Admintools';

import './App.css';

function App() {
  return (
    <div id="App">
      <AdminTool />
      <BrowserRouter>
      </BrowserRouter>
      Hola mundo
    </div>
  );
}

export default App;
