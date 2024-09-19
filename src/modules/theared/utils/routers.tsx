import React, { Suspense } from 'react';
import { ThreadProvider } from '../../../contexts/Thread.context';
import { Loading } from '../../../components';

const ThreadLoader = React.lazy(() => import('../components/Loader'));
const Theared = React.lazy(() => import('../Theared'));
const RootLayout = React.lazy(() => import('../../../layouts/RootLayout'));
const Headers = React.lazy(
  () => import('../../../modules/theared/components/Header')
);
const threadRoutes = [
  {
    path: ':cfskey/:cfstoken',
    element: (
      <ThreadProvider>
        <Suspense fallback={<Loading />}>
          <ThreadLoader />
        </Suspense>
      </ThreadProvider>
    ),
    children: [
      {
        index: true,
        element: (
          <RootLayout Header={Headers}>
            <Theared />
          </RootLayout>
        ),
      },
    ],
  },
];

export default threadRoutes;
