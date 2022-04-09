import './App.css';
import React from 'react';
import Header from './componement/Header'
import TinderCards from './componement/TinderCards';
import SwipeButton from './componement/SwipeButtons';
function App() {
  return (
    // BEM class
    <div className="app">
      
      <Header />
      <TinderCards />
      <SwipeButton />

    </div>
  );
}

export default App;
