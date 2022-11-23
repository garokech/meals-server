import './App.css';
import AppContext from './context';
import AppNavbar from './Components/NavBar';
import Home from './pages/Home';

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