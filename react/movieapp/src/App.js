import { useState, useEffect } from 'react';

function Hello() {
  useEffect(function () {
    console.log('created');
    return function bye() {
      console.log('destroyed');
    };
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [show, setShow] = useState(false);
  function onClick() {
    setShow(function (prev) {
      return !prev;
    });
  }
  return (
    <div>
      {show ? <Hello></Hello> : null}
      <button onClick={onClick}>{show ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;
