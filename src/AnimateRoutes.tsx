import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './routes/Home';
import Potrace from './routes/Potrace';
import AxiosTest from './routes/Axios';
import Framer from './routes/Framer';
import FramerEx1 from './routes/FramerEx1';
import FramerJoker from './routes/FramerJoker';

function AnimateRoutes() {
  // useLocation은 반드시 router 컴포넌트 안에서 호출되어야 한다.
  // 지금은 App.tsx에서 createBrowserRouter 함수 안에서 호출됐기 때문에 문제없이 적용된다.
  const location = useLocation();

  return (
    /* 
        [AnimatePresence]
        컴포넌트가 언마운트될 때 애니메이션을 설정할 수 있게 한다.
        언마운트 애니메이션은 적용하고 싶은 모션 컴포넌트에 exit 속성을 통해 사용할 수 있다.

        AnimatePresence를 사용하기 위해선 규칙이 있는데,
        직계 자식에게 고유의 key값이 존재해야 한다는 것이다.

        아래 코드는 라우터에 적용한 방식이며,
        Routes 컴포넌트는 useLocation 훅을 통해 받은 pathname으로 key 값이 설정되어 있다.

        - initial 새로고침을 했을때 자식 요소들에게 설정된 initial를 작동하지 않도록 한다. (앞/뒤로가기 때는 작동하는 듯)
        - mode="wait" 현재 컴포넌트가 언마운트될때까지 애니메이션을 기다렸다가 그 다음에 새로운 컴포넌트를 로드한다.
    */
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/potrace" element={<Potrace />} />
        <Route path="/axios" element={<AxiosTest />} />
        <Route path="/framer" element={<Framer />} />
        <Route path="/framer_ex1" element={<FramerEx1 />} />
        <Route path="/framer_ex1/framerJoker" element={<FramerJoker />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimateRoutes;
