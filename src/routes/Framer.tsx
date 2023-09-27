import styled from 'styled-components';
import Box1 from '../components/framer/Box1';
import Box2 from '../components/framer/Box2';
import Box3 from '../components/framer/Box3';
import Box4 from '../components/framer/Box4';
import Box5 from '../components/framer/Box5';
import Box6 from '../components/framer/Box6';

const H1 = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 100px;
`;

const Span = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;

function Framer() {
  return (
    <div className="framer-container">
      <H1>Framer 연습</H1>
      <Span>박스 1</Span>
      <Box1 />
      <Span>박스 2</Span>
      <Box2 />
      <Span>박스 3</Span>
      <Box3 />
      <Span>박스 4</Span>
      <Box4 />
      <Span>박스 5</Span>
      <Box5 />
      <Span>박스 6</Span>
      <Box6 />
    </div>
  );
}

export default Framer;
