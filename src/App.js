import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Nav from './components/nav'

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
    </Router>
  );
}

export default App;
