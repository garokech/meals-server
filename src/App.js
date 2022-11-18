import './App.css';
import MyJumbotron from './components/Jumbotron';
import Navbar  from './components/NavigationBar';

function App() {
  return (
    <div className="jumbotron">
      <Navbar />
      <MyJumbotron />
    </div>
  );
}

export default App;
