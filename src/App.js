import React, { useState, useEffect } from 'react';
import { Dashboard } from './components/Dashboard';
import Display from './components/Display';

function App() {
  const initial = {
    ball: 0,
    strike: 0
  }

  const [count, setCount] = useState(initial);

  useEffect(() => {
    if (count.strike === 3 || count.ball === 4) {
      setCount(initial);
    }
  }, [count, initial])

  const atBat = (e) => {
    let value = e.target.innerText.toLowerCase();
    if (value === 'strike') {
      setCount(prev => ({
        ...prev,
        strike: prev.strike + 1
      }))
    } else {
      setCount(prev => ({
        ...prev,
        ball: prev.ball + 1
      }))
    }
  }

  const hit = () => {
    setCount(initial);
  }

  const foul = () => {
    if (count.strike < 2) {
      setCount(prev => ({
        ...prev,
        strike: prev.strike + 1
      }))
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Display count={count}/>
        <Dashboard 
          atBat={atBat}
          hit={hit}
          foul={foul}
          strike={count.strike}
        />
      </header>
    </div>
  );
}

export default App;
