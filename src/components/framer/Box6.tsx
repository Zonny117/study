import { motion, useAnimation } from 'framer-motion'

function Box6() {
  // useAnimation 훅을 이용해 애니메이션을 설정할 수 있다.
  const control = useAnimation()

  return (
    <div className="box-container">
      {/* 
        각 버튼 태그의 onClick 이벤트 핸들러에 훅을 이용해 애니메이션을 설정하고 있다.
      */}
      <button
        onClick={() => {
          control.start({
            x: 1200,
            transition: { duration: 2 },
          })
        }}
      >
        Move Right
      </button>
      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: { duration: 2 },
          })
        }}
      >
        Move Left
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: '50%',
            transition: { duration: 2 },
          })
        }}
      >
        Circle
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: 0,
            transition: { duration: 2 },
          })
        }}
      >
        Sqaure
      </button>
      <button
        onClick={() => {
          control.stop()
        }}
      >
        Stop
      </button>
      {/* useAnimation 훅은 animate의 값에 지정하면 된다. */}
      <motion.div className="box" animate={control}></motion.div>
    </div>
  )
}

export default Box6
