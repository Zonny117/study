import { motion, Variants } from 'framer-motion'

function Box4() {
  const boxVariant: Variants = {
    hidden: {
      x: '-100vw',
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        // when - 애니메이션의 실행 지점을 설정한다.
        // beforeChildren 자식 요소보다 먼저 실행됨
        when: 'beforeChildren',
        // 자식 요소의 애니메이션 실행을 순차적으로 진행한다.
        staggerChildren: 0.2,
      },
    },
  }

  const listVariant: Variants = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  }

  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariant}
        initial="hidden"
        animate="visible"
      >
        {[1, 2, 3].map((box, index) => {
          return (
            // 부모 태그 props에 variants가 존재한다면, 자식 태그에서도
            // 부모 variants 속성을 이용한다.
            // 따라서 자식 태그에서는 initial과 animate 부분은 생략할 수 있다.
            <motion.li
              key={index}
              className="boxItem"
              variants={listVariant}
            ></motion.li>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Box4
