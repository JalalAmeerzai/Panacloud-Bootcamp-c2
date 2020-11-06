import './App.css';
import React from 'react';
import Dinner from './dinner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dinner dishName="Chicken Biryani" sweetName="Kheer" />
        <hr/>
        <Dinner dishName="Chicken Karahi" sweetName="Halwa" />
      </header>
    </div>
  );
}

export default App;
