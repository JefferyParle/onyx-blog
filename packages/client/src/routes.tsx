import { type RouteObject } from 'react-router-dom';
import Home from './pages/home/Home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
];

export default routes;
