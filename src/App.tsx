import { RouterProvider, createHashRouter } from 'react-router-dom';
import Home from './routes/Home';
import Potrace from './routes/Potrace';
import AxiosTest from './routes/Axios';

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
]);

function App() {
  return <RouterProvider router={routerProvider} />;
}

export default App;
