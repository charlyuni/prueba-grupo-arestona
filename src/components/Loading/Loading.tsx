import React from 'react';
import './Loading.scss';

export const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};
