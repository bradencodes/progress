import React from 'react';
import './App.css';

import Navbar from "./components/layout/Navbar.js";
import Landing from "./components/layout/Landing.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
