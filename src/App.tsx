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
  createRoutesFromElements(<Route path="*" element={<AnimateRoutes />} />),
  /* 
    BrowserRouter 방식을 사용할 경우, basename 옵션을 설정하는 것이 권장된다.
    procees.env.PUBLIC_URL은 package.json에 homepage의 값을 읽어온다.

    homepage에는 서버 도메인을 설정하면 되는데, 주의할 점은 build 폴더 채로 넣게되면
    당연히 build까지 경로를 입력해줘야 브라우저가 인식한다.
    
    예) https://www.hifactory.co.kr/build/
  */
  {
    basename: process.env.PUBLIC_URL,
  }
);

function App() {
  // RouterProvider에 jsx요소로 생성된 router 변수를 연결
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
