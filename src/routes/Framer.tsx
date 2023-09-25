import styled from 'styled-components';
import { motion } from 'framer-motion';

const H1 = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 32px;
  margin-top: 20px;
`;

function Framer() {
  return (
    <>
      <H1>Framer 연습</H1>
      <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: [0, 900, 0] }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 0.9, opacity: 0.2 }}
      >
        프레이머 텍스트 애니메이션
      </motion.h1>
    </>
  );
}

export default Framer;
