import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  function onChange(e) {
    setKeyword(e.target.value);
  }

  function onClick() {
    setValue(function (prev) {
      return prev + 1;
    });
  }

  function once() {
    console.log('딱 한번만 렌더링해!');
  }

  /* 
    useEffect - 렌더링 여부를 따로 설정할 수 있다.

    컴포넌트의 state가 변화할 때, 해당 컴포넌트 자체가 렌더링된다.
    딱 한번만 렌더링을 하거나 혹은 state 값이 변화할 때만 렌더링하고 싶은 
    컴포넌트 구성 요소가 있을 때, useEffect를 사용한다.

    useEffect(function, array);
    - function에는 렌더링시 실행할 함수,
    - array는 빈값일 경우 딱 한번만 렌더링을 하고, state값을 넣으면 해당 state값이 변화할 때만 렌더링을 실행한다. (Deps라고 한다.)

  */

  // 한번만 렌더링을 하는 코드
  useEffect(once, []);

  // keyword state가 변경될때만 렌더링을 실행
  useEffect(
    function () {
      // 제어문을 통해 렌더링 시점을 정할수도 있다. 밑은 빈값이 아니고, 문자열이 5자 이상일때 렌더링을 실행하는 제어문이다.
      if (keyword !== '' && keyword.length > 5) {
        console.log('키워드가 변경될때만 렌더링해!');
      }
    },
    [keyword]
  );

  // counter state가 변경될때 렌더링 실행
  useEffect(
    function () {
      console.log('카운터가 변경될 때만 렌더링');
    },
    [counter]
  );

  // state 개수는 얼마든지 추가할 수 있다.
  useEffect(
    function () {
      console.log('나는 카운터, 키워드 둘중 하나라도 변경되면 렌더링 실행');
    },
    [counter, keyword]
  );

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
