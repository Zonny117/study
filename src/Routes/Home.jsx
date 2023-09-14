import React, { useState } from 'react';
import styled from 'styled-components';

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

  const onSubmit = e => {
    e.preventDefault();
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  const onClcik = () => {};

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
        <button style={{ marginLeft: 10 }} type="submit">
          게시
        </button>
      </form>

      <List></List>
    </div>
  );
}

export default Home;
