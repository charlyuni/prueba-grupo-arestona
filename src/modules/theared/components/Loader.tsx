import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { FaRedo } from 'react-icons/fa';
import { useGetThreadQuery } from '../hooks/useGetThreadQuery';
import '../styles/ErrorReload.scss';
import { useThreadContext } from '../../../contexts/Thread.context';
import { errorAlert } from '../../../utils/alerts';
import { Button, Loading } from '../../../components';

const ThreadLoader = () => {
  const { cfskey, cfstoken } = useParams();
  const { setThreadData } = useThreadContext();

  const { data, error, isLoading, refetch } = useGetThreadQuery({
    cfskey: cfskey || '',
    cfstoken: cfstoken || '',
  });

  useEffect(() => {
    if (data) {
      setThreadData(data);
    }
  }, [data, setThreadData]);

  if (!cfskey || !cfstoken) {
    return <p>Error: cfskey o cfstoken no válidos.</p>;
  }

  if (error) {
    errorAlert('Error al cargar el hilo');
    return (
      <div className="error-reload">
        <p className="error-reload__message">
          Hubo un problema al cargar el hilo. Por favor, intenta nuevamente.
        </p>
        <Button onClick={() => refetch()} variant="danger" icon={<FaRedo />}>
          Recargar
        </Button>
      </div>
    );
  }

  return isLoading ? <Loading /> : <Outlet />;
};

export default ThreadLoader;
