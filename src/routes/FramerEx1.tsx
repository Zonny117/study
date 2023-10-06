import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: azure;
  padding-top: 40px;
  box-sizing: border-box;
`;

const H1 = styled(motion.h1)`
  font-weight: bold;
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
`;

const ImgBox = styled(motion.div)`
  text-align: center;
  & img {
    width: 350px;
    height: 500px;
    object-fit: cover;
    cursor: pointer;
  }
`;

const PicTitle = styled(motion.div)`
  padding: 10px;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

function FramerEx1() {
  const variants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  // 부모의 Variants를 자식 요소가 수정하려면 key가 일치해야한다!
  // 아래는 동일한 hidden, visible key를 사용하고, 해당 key의 value인 opacity 값은 그대로 받고 있으며,
  // 자식 요소에서는 y값만 추가했다.
  const children: Variants = {
    hidden: {
      y: 200,
    },
    visible: {
      y: 0,
      transition: {
        type: 'spring',
        damping: 50,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <Wrapper>
      <H1 exit={{ opacity: 0 }}>프레이머 예제1</H1>
      {/* 
        react에서 이미지를 불러는 방법은 여러가지이다.
        
        1. import를 이용한 방법
        2. public 폴더에 넣고 이용하는 방법
        3. require 메소드로 요청하는 방법
        4. css background를 이용하는 방법
        
        컴포넌트 내부에서 사용하는 이미지는 src,
        이외 파비콘과 같은 이미지는 public에 존재해야 한다.
        public은 절대 경로를 사용하기 때문에 경로 설정이 필수다.
        또한, 네트워크 요청이 들어가기 때문에 상대적으로 무겁다.
       */}
      <ImgBox variants={variants} initial="hidden" animate="visible">
        <Link to={'/framer_ex1/framerJoker'}>
          <motion.img
            variants={children}
            src={require('../assets/images/joker.jpg')}
            alt="조커"
          />
          <PicTitle variants={children} exit="exit">
            Joker
          </PicTitle>
        </Link>
      </ImgBox>
    </Wrapper>
  );
}

export default FramerEx1;
