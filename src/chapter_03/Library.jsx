import React from 'react';
import Book from './book';

function Library(props) {
  return (
    <div>
      <Book name="처음 만난 파이썬" numOfPages={300}></Book>
      <Book name="처음 만난 AWS" numOfPages={400}></Book>
      <Book name="처음 만난 리액트" numOfPages={500}></Book>
    </div>
  );
}

export default Library;
