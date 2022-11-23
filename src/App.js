import './App.css';
import AppContext from './context';
import AppNavbar from './Components/NavBar';
import Home from './Components/pages/test';

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