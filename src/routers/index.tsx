import React from 'react';
import { Navigate } from 'react-router-dom';
import threadRoutes from '../modules/theared/utils/routers';
import Error404 from '../utils/error404';

const router = [
  {
    path: '*',
    element: <Navigate to="/404" replace />,
  },
  {
    path: '/404',
    element: <Error404 />,
  },
  ...threadRoutes,
];

export default router;
