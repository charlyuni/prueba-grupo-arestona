import React from 'react';
import './Footer.scss';

export const GenericFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-content">
      &copy; {currentYear} Prueba Grupo Arestora
    </div>
  );
};
