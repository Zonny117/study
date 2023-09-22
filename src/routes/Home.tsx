import React, { useState } from 'react';
import styled from 'styled-components';
import { add } from '../redux/reducers/todo';
import { useAppDispatch, useAppSelector } from '../Hook';
import { Link } from 'react-router-dom';

type TodoItem = {
  text: string;
  id: number;
};

const H1 = styled.h1`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

const Button = styled.button`
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: blue;
    color: white;
  }
`;

const TodoList = styled.ul`
  padding-top: 20px;
  & li {
    display: block;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

// 스타일 컴포넌트의 기존 컴포넌트 스타일 적용법
const StyledLink = styled(Link)`
  display: inline-block;
  color: black;
  margin: 20px auto;
  font-weight: bold;
`;

// 스타일 컴포넌트의 props 활용법
const ConditionDiv = styled.div<{ $primary?: boolean }>`
  background-color: ${props => (props.$primary ? 'black' : 'grey')};
  height: 100px;
  margin-top: 50px;
`;

function Home() {
  const [value, setValue] = useState('');

  const todoList = useAppSelector(state => state.rootReducer.todoSlice);
  const dispatch = useAppDispatch();

  const [primary, setPrimary] = useState(false);

  // preventDefault는 SyntheticEvent 타입이다.
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(add(value));
    setPrimary(prev => !prev);
    setValue('');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <H1>오늘의 할일</H1>
      <form onSubmit={onSubmit} style={{ marginLeft: 20 }}>
        <input type="text" value={value} onChange={onChange} />
        <Button type="submit">게시</Button>
      </form>
      <TodoList>
        {todoList.map((item: TodoItem) => (
          <li key={item.id} id={item.id.toString()}>
            {item.text}
          </li>
        ))}
      </TodoList>
      <ConditionDiv $primary={primary}></ConditionDiv>
      <ConditionDiv></ConditionDiv>
      <StyledLink to={'/potrace'}>포트레이스</StyledLink>
      <br />
      <StyledLink to={'/axios'}>Axios</StyledLink>
    </>
  );
}

export default Home;
