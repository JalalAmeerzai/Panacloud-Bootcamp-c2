import './App.css';
import React, {useState} from 'react';
import Dinner from './dinner';
 
function App() {

  let [count, setCount] = useState(0);
  let [mode, setMode] = useState(true);

  return (
    <div className="App">
      <header className={`${mode ? 'darkMode' : 'lightMode'}`}>
        <button onClick={ () => setMode(prevState => !prevState)}>
          Change Mode
        </button>
        <h3>Theme Selected: {mode ? 'Dark Mode' : 'Light Mode'}</h3>
        <Dinner dishName="Chicken Biryani" serving={count} />
        <button onClick={() => setCount(prevState => prevState + 1)}>
          Increase Servings
        </button>
      </header>
    </div>
  );
}

export default App;
