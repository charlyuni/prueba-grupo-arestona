import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QueryClientProvider from './providers/QueryProvider';
import router from './routers';
import ErrorBoundary from './utils/errorBoundary';
import { ModalProvider } from './contexts/Modal.context';
import { Loading } from './components';
import './styles/_globals.scss';

function App() {
  const content = useRoutes(router);

  return (
    <QueryClientProvider>
      <ErrorBoundary>
        <ModalProvider>
          <Suspense fallback={<Loading />}>{content}</Suspense>
          <ToastContainer autoClose={5000} hideProgressBar />
        </ModalProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
