import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Wrapper = styled.div<{ $overflow: boolean }>`
  min-height: 100vh;
  max-height: ${props => (props.$overflow ? 'unset' : '100vh')};
  background-color: azure;
  padding-top: 40px;
  box-sizing: border-box;
  overflow: ${props => (props.$overflow ? 'auto' : 'hidden')};
`;

const H1 = styled(motion.h1)`
  font-weight: bold;
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
`;

const ImgBox = styled(motion.div)`
  text-align: center;
  margin: 0 auto;
  width: 350px;
  height: 500px;
  font-size: 0;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

function FramerJoker() {
  const [overflow, setOverflow] = useState<boolean>(false);

  console.log(overflow);
  return (
    <Wrapper $overflow={overflow}>
      <H1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'circIn', damping: 50 }}
      >
        Joker
      </H1>
      <ImgBox
        animate={{ width: '100%', height: '100%' }}
        transition={{ duration: 1 }}
        onAnimationComplete={() => {
          setOverflow(true);
        }}
      >
        <motion.img src={require('../assets/images/joker.jpg')} alt="조커" />
      </ImgBox>
    </Wrapper>
  );
}

export default FramerJoker;
