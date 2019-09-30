import React, { useState, useEffect } from 'react';
import { Dashboard } from './components/Dashboard';
import Display from './components/Display';

function App() {
  const initial = {
    balls: 0,
    strikes: 0
  }

  const [count, setCount] = useState(initial);

  useEffect(() => {
    if (count.strikes === 3 || count.balls === 4) {
      setCount(initial);
    }
  }, [count, initial])

  const atBat = (e) => {
    let value = e.target.innerText.toLowerCase();
    setCount(count[value] + 1);
    console.log(count.strikes);
  }

  const hit = () => {
    setCount(initial);
  }

  const foul = () => {
    if (count.strikes < 2) {
      setCount(count.strikes++)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Display count={count}/>
        <Dashboard 
          atBat={atBat}
        />
      </header>
    </div>
  );
}

export default App;
