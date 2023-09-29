import { Navigate, useRoutes } from 'react-router-dom';
//
import { PATH_AFTER_LOGIN } from 'src/config-global';
import { authRoutes } from './auth';
import { homeRoutes } from './home';
import { mainRoutes } from './main';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to={PATH_AFTER_LOGIN} replace />,
    },

    // Auth routes
    ...authRoutes,

    // home routes
    ...homeRoutes,

    // Main routes
    ...mainRoutes,

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
