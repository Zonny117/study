import { motion } from 'framer-motion';
import { useState } from 'react';

function Box1() {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  return (
    <div className="box-container">
      <motion.div
        className="box"
        // initial - 애니메이션의 초기 상태값을 설정
        initial={{ opacity: 0.1 }}
        // animate - 실행할 애니메이션 설정
        animate={{
          x: isAnimating ? 1200 : 0,
          opacity: isAnimating ? 1 : 0.5,
          rotate: isAnimating ? 360 : 0,
        }}
        // transition - 애니메이션의 속도, 이징 등을 설정
        transition={{
          type: 'spring',
          //   stiffness는 애니메이션 이징의 강도를 조절할 수 있다.
          stiffness: 75,
          /* 
            duration : 애니메이션 지속시간 조절
            dumping : 애니메이션 반동 감도 조절
          */
        }}
        onClick={() => {
          setIsAnimating(!isAnimating);
        }}
      ></motion.div>
    </div>
  );
}

export default Box1;
