export interface IRouteItem {
  path: string;
  name: string;
}

const baseRoutes = {
  root: {
    path: '/',
    name: 'Root',
  },
  main: {
    path: 'main',
    name: 'Main page',
  },
  login: {
    path: 'login',
    name: 'Login page',
  },
};

const routes = {
  ...baseRoutes,
};

type TAllRoutes = {
  [key in keyof typeof routes]: IRouteItem;
};

export const AllRoutes: TAllRoutes = routes;
