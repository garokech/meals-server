import './App.css';
import AppContext from './context';
import AppNavbar from './components/NavBar';
import Home from './pages/Home';
import React from 'react';

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