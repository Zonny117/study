import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './components/page/MainPage';
import PostWritePage from './components/page/PostWritePage';
import PostViewPage from './components/page/PostViewPage';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>소플의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage></MainPage>}></Route>
        <Route
          path="post-write"
          element={<PostWritePage></PostWritePage>}
        ></Route>
        <Route
          path="post/:postId"
          element={<PostViewPage></PostViewPage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
