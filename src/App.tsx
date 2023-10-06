import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import AnimateRoutes from './AnimateRoutes';

// react router dom 6.4 방식
const router = createBrowserRouter(
  // 라우터 설정을 jsx 요소로 설정하는 방법
  // path의 애스터리스크는 모든 경로에 element에 설정된 컴포넌트를 렌더링하겠다는 의미이다.
  createRoutesFromElements(<Route path="*" element={<AnimateRoutes />} />)
);

function App() {
  // RouterProvider에 jsx요소로 생성된 router 변수를 연결
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
