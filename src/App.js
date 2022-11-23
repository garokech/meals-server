import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import axios from 'axios'
import {useEffect} from 'react'

function App() {
  useEffect(() => {
    axios
    .get('https://www.themealab.com/api/json/v1/1/search.php?f=a')
    .then(data => console.log(data))
  }, [])
  return (
    <div className="jumbotron">
      <Navbar />
      <MyJumboTron />
    </div>
  );
}

export default App;
