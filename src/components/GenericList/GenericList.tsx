import React from 'react';
import './GenericList.scss';
interface ListItem {
  label: string;
  value: string | React.ReactNode;
}

interface GenericListProps {
  items: ListItem[];
  className?: string;
  emptyMessage?: string;
}

export const GenericList: React.FC<GenericListProps> = ({
  items,
  className = '',
  emptyMessage = 'No items available',
}: GenericListProps) => {
  return (
    <ul className={`generic-list ${className}`}>
      {items.length > 0 ? (
        items.map((item, index) => (
          <li key={index} className="generic-list__item">
            <strong>{item.label}:</strong>
            <span>{item.value}</span>
          </li>
        ))
      ) : (
        <li className="generic-list__empty">{emptyMessage}</li>
      )}
    </ul>
  );
};
