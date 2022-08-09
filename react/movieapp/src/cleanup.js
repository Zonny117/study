import { useState, useEffect } from 'react';

function Hello() {
  useEffect(function () {
    console.log('created');
    // effect 함수 안에서 리턴되는 함수는 cleanup 함수이다.
    // 컴포넌트가 삭제될때 실행되는 코드이다.
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
