import './App.css';
import Navbar  from './components/NavigationBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="jumbotron">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

