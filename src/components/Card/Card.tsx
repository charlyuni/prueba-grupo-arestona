import React from 'react';
import './Card.scss';

interface CardContentItem {
  label: string;
  value: string | React.ReactNode;
}

interface CardProps {
  title: string;
  contentItems: CardContentItem[];
  footer?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, contentItems, footer }) => {
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <div className="card__content">
        {contentItems.map((item, index) => (
          <p key={index}>
            <strong>{item.label}:</strong> {item.value}
          </p>
        ))}
      </div>
      {footer && <div className="card__footer">{footer}</div>}
    </div>
  );
};
