import React from 'react';
import './Button.scss';

type ButtonProps = {
  onClick?: () => void;
  variant?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'none';
  children?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  variant = 'primary',
  children,
  icon,
  disabled,
  type = 'button',
  loading,
}) => {
  return (
    <button
      className={`btn btn--${disabled || loading ? 'disabled' : variant}`}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
    >
      {loading ? (
        <span className="btn__loading">Cargando...</span> // Indicador de carga
      ) : (
        <>
          {icon && <span className="btn__icon">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};
