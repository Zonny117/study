import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);

  function onClick() {
    setValue(function (prev) {
      return prev + 1;
    });
  }

  function once() {
    console.log('once');
  }

  useEffect(once, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
