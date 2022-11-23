import './App.css';
import AppContext from './context';
<<<<<<< HEAD
import AppNavbar from './components/NavBar';
import Home from './pages/Home';
import React from 'react';
=======
import AppNavbar from './Components/NavBar';
import Home from './pages/Home'
>>>>>>> ec341c62fee6d276c8bb43257302afe1e2398bba

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