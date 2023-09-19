import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { add } from '../store/store';

/* 
    useSelector, useDispatch

    버튼 클릭시 리스트 생성
*/
const Title = styled.h1`
  text-align: center;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  & > * {
    list-style: none;
  }
`;

function Home() {
  const [value, setValue] = useState('');

  // 필요한 reducer만 가져와서 사용한다. 불필요하게 많은 데이터를 부르지 않도록 한다.
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
    // 디스패치 훅은 리듀서의 액션을 호출한다. 액션 함수가 받은 값은 리듀서에게 페이로드라는 속성으로 전달된다.
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
    </div>
  );
}

export default Home;
