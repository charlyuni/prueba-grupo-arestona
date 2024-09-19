import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa';
import '../styles/Header.scss';
import { useThreadContext } from '../../../contexts/Thread.context';
import { useModalContext } from '../../../contexts/Modal.context';
import { Button, GenericList } from '../../../components';

const Header: React.FC = () => {
  const { openModal, closeModal, isOpen } = useModalContext();
  const { cfscode, sender, recipient, status, history } = useThreadContext();

  const toggleHistory = () => {
    if (isOpen) closeModal();
    else openModal();
  };

  const dataItems = [
    {
      label: 'CFS Code',
      value: cfscode,
    },
    {
      label: 'Emisor',
      value: sender,
    },
    {
      label: 'Receptor',
      value: recipient,
    },
    {
      label: 'Estado',
      value: status?.status,
    },
  ];

  return (
    <div className="header header__content">
      <GenericList items={dataItems} />
      <div className="header__history">
        {history.length > 0 && (
          <Button
            onClick={toggleHistory}
            variant="light"
            icon={isOpen ? <FaAngleUp /> : <FaAngleDown />}
          >
            {isOpen ? 'Ocultar' : 'Mostrar'} historial
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
