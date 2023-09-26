import { motion } from 'framer-motion';

function Box5() {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          // css의 keyframe 기능은 framer에서는 다음과 같이 배열에 담아 구현한다. 훨씬 간단함.
          scale: [1, 1.4, 1.4, 1, 1],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{
          // 애니메이션 지속시간이 2초 이기 때문에 각 키프레임의 시간은 0.4초이다. (2 / 5 = 0.4)
          duration: 2,
        }}
      ></motion.div>
    </div>
  );
}

export default Box5;
