import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Error404.scss';

const Error404: React.FC = () => {
  return (
    <div className="error-page">
      <h1 className="error-page__title">404</h1>
      <p className="error-page__message">Página no encontrada</p>
      <Link to="/" className="error-page__link">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Error404;
