// routesconfig.js

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import { isAuthenticated, isAuthorized } from './auth';

const routes = [
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/',
    component: HomePage,
    canActivate: [isAuthenticated],
  },
  {
    path: '/admin',
    component: AdminPage,
    canActivate: [isAuthenticated, () => isAuthorized(['admin'], 'AdminPage')],
  },
];

export default routes;
