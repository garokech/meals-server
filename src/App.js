import './App.css';
import Navbar  from './components/NavigationBar';
import AppContext from './context';
import Home from './pages/Home';

function App() {
  return (
    <AppContext>
    <div className="jumbotron">
      <Navbar />
      <Home />
    </div>
    </AppContext>
  );
}

export default App;

