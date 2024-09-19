import React from 'react';
import { ThreadProvider } from '../../../contexts/Thread.context';

const ThreadLoader = React.lazy(() => import('../components/Loader'));
const Theared = React.lazy(() => import('../Theared'));
const RootLayout = React.lazy(() => import('../../../layouts/RootLayout'));
const Headers = React.lazy(
  () => import('../../../modules/theared/components/Header')
);

const threadRoutes = [
  {
    path: ':cfskey',
    element: (
      <ThreadProvider>
        <RootLayout Header={Headers} />
      </ThreadProvider>
    ),
    children: [
      {
        path: ':cfstoken',
        element: <ThreadLoader />,
        children: [
          {
            index: true,
            element: <Theared />,
          },
        ],
      },
    ],
  },
];

export default threadRoutes;
