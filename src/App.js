import React from 'react';
import { Homepage } from './pages/Homepage.component';


import './App.css';
import { Router } from 'react-router-dom';

function App() {
  return (
    <div >
      <Router excat path='/' component={Homepage} />
    </div>
  );
}

export default App;
