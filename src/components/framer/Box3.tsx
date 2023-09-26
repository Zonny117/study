import { motion, Variants } from 'framer-motion';

function Box3() {
  /* 
    jsx 태그안에 애니메이션을 직접 작성하다보면 가독성이 떨어질때가 있다.
    이때 variants 속성을 이용하여, 변수를 전달하여 유지보수를 더욱 쉽게 구성할 수 있다.
    타입스크립트 사용시 Variants를 임포트하고 타입으로 지정해주면, 속성 값 설정시 간편하게 자동완성 사용이 가능하다.
  */
  const boxVariant: Variants = {
    // variant의 키값은 작명할 수 있다.
    lion: {
      x: 100,
      scale: 1.5,
      backgroundColor: 'yellow',
    },
    elephant: {
      x: 1000,
      scale: 0.3,
      backgroundColor: 'green',
    },
  };

  return (
    <div className="box-container">
      <motion.div
        className="box"
        // 설정된 variant를 사용하기 위해선 아래와 같이 props로 전달해주어야한다.
        variants={boxVariant}
        // 위에서 선언된 boxVariant의 lion에 속한 value를 초기 상태값으로 이용한다.
        initial="lion"
        // 또한 애니메이트로 활용할 수도 있다.
        animate="elephant"
      ></motion.div>
    </div>
  );
}

export default Box3;
