import React, { useState, useEffect } from 'react';

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
  }, [count])

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
        <span className="greet">Hello World</span>
      </header>
    </div>
  );
}

export default App;
