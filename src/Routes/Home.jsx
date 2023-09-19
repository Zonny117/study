import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { add } from '../store/store';

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

const List = styled.ul`
  li {
    margin-top: 10px;
  }

  /* 미디어 쿼리 적용법 */
  @media screen and (max-width: 768px) {
    li {
      color: red;
    }
  }
`;

const TestProps = styled.div`
  width: 100%;
  height: 350px;
  /* 
    props를 이용해 조건부 스타일링을 하는 방식이다.
    문제는 primary처럼 변수 그대로 전달하게 되면 리액트 입장에서는 dom에서 사용하는 변수로 인식할 수 있어서
    해당 props는 styled components에서만 사용한다는 것을 명시해주어야한다.
    $ 기호를 props 명 앞에 붙여서 사용하면 해결된다.
   */
  background-color: ${props => (props.$primary ? 'red' : 'black')};
`;

function Home() {
  const [value, setValue] = useState('');

  // useSelector hook은 필요한 reducer만 가져와서 사용한다. 불필요하게 많은 데이터를 부르지 않도록 한다.
  const todoList = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    setValue('');
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  const onClick = () => {
    // 디스패치 훅(hook)은 리듀서(reducer)의 액션(action)을 호출한다. 액션 함수가 받은 값은 리듀서에게 페이로드(payload)라는 속성으로 전달된다.
    dispatch(add(value));
  };

  return (
    <div>
      <Title>오늘 할 일</Title>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          placeholder="할 일을 적으시오."
          onChange={onChange}
        />
        <button style={{ marginLeft: 10 }} type="submit" onClick={onClick}>
          게시
        </button>
      </form>

      <List>
        {todoList.map(item => (
          <li>{item.text}</li>
        ))}
      </List>

      <TestProps></TestProps>
      {/* $ 기호를 통해 primary 라는 props가 styled components에서만 사용함을 명시해주었다. 
      따라서 react dom 오류 메세지는 해결된다. */}
      <TestProps $primary></TestProps>
    </div>
  );
}

export default Home;
