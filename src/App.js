import './App.css';
import AppContext from './context';
import AppNavbar from './components/NavBar';
import Home from './components/pages/Home';

import AppNavbar from './Components/NavBar';

import Home from './Components/pages/Home';

function App() {
  return (
    <AppContext>
    <div>
      <AppNavbar />
      <Home />
    </div>
    </AppContext>
  );
}

export default App;