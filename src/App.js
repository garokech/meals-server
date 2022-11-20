import React from 'react'
import './App.css';
import Jumbo from './components/Jumbo';
import AppNavbar from './components/NavBar';

function App() {
  return (
    <div className="jumbo">
      <AppNavbar />
      <Jumbo />
      <h1>recipe App</h1>
    </div>
  );
}

export default App;
 