import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';

const errorRoutes = [
  {
    path: '*',
    component: ErrorPage,
  },
];

export const routers = [
  {
    path: '/',
    component: HomePage,
  },

  ...errorRoutes,
];
