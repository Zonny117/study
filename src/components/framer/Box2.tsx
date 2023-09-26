import { motion } from 'framer-motion';

function Box2() {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        // 호버시 애니메이션 설정
        whileHover={{ scale: 1.1 }}
        // 클릭시 애니메이션 설정
        whileTap={{ scale: 0.9 }}
        // 드래그 설정
        drag
        // 드래그 영역 제한 및 제자리 복귀
        dragConstraints={{
          right: 20,
          left: -20,
          top: 5,
          bottom: 5,
        }}
      ></motion.div>
    </div>
  );
}

export default Box2;
