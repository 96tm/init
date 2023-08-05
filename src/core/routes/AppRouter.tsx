import {
  Navigate,
  RouteObject,
  useLocation,
  useRoutes,
} from 'react-router-dom';
import { memo } from 'react';
import LoginPage from '../../pages/LoginPage';
import MainPage from '../../pages/MainPage';
import { AllRoutes } from './AllRoutes';

interface IRedirect {
  path?: string;
}

export const AppRedirect = ({ path = '/' }: IRedirect) => {
  const location = useLocation();
  return <Navigate to={path} state={{ from: location }} replace />;
};

const allRoutes: RouteObject = {
  path: AllRoutes.root.path,
  children: [
    { index: true, element: <Navigate to={AllRoutes.login.path} replace /> },
    { path: AllRoutes.login.path, element: <LoginPage /> },
    { path: AllRoutes.main.path, element: <MainPage /> },
    { path: '*', element: <AppRedirect path={AllRoutes.login.path} /> },
  ],
};

export const AppRouter = memo(() => {
  return useRoutes([allRoutes]);
});
