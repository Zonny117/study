import { RouterProvider, createHashRouter } from 'react-router-dom'
import Home from './routes/Home'
import Potrace from './routes/Potrace'
import AxiosTest from './routes/Axios'
import Framer from './routes/Framer'
import { AnimatePresence } from 'framer-motion'
import FramerEx1 from './routes/FramerEx1'

/* 라우터 사용 권장 방식 */
const routerProvider = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/potrace',
    element: <Potrace />,
  },
  {
    path: '/axios',
    element: <AxiosTest />,
  },
  {
    path: '/framer',
    element: <Framer />,
  },
  {
    path: '/framer_ex1',
    element: <FramerEx1 />,
  },
])

function App() {
  return (
    // framer exit 속성을 사용하기 위해선 AnimatePresence로 해당 컴포넌트를 래핑해야한다.
    // 혹은 아예 최상위 루트에서 아래처럼 래핑해도 된다.
    <AnimatePresence>
      <RouterProvider router={routerProvider} />
    </AnimatePresence>
  )
}

export default App
