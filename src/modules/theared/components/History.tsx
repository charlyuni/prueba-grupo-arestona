import React from 'react';
import dayjs from 'dayjs';
import '../styles/History.scss';
import { Card } from '../../../components';

interface HistoryProps {
  history: {
    status: string;
    date: string;
    description: string;
  }[];
}

export const History: React.FC<HistoryProps> = ({ history }) => {
  return (
    <div className="history">
      <h2 className="history__title">Historial</h2>
      <div className="history__cards">
        {history.map((entry, index) => (
          <Card
            key={index}
            title={`Estado: ${entry.status}`}
            contentItems={[
              { label: 'Fecha', value: dayjs(entry.date).format('DD/MM/YYYY') },
              { label: 'Descripción', value: entry.description },
            ]}
          />
        ))}
      </div>
    </div>
  );
};
