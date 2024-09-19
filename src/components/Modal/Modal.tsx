import React, { useEffect, useState } from 'react';
import './Modal.scss';
import { IoIosCloseCircle } from 'react-icons/io';
import { useModalContext } from '../../contexts/Modal.context';
import { Button } from '../Button/Button';

interface ModalProps {
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  const { isOpen, closeModal } = useModalContext();
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      closeModal();
    }, 200);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`modal-overlay ${isClosing ? 'closing' : ''}`}
      onClick={handleClose}
    >
      <div
        className={`modal-content ${isClosing ? 'closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-close">
          <Button
            onClick={handleClose}
            variant="none"
            icon={<IoIosCloseCircle size={30} color="#333" />}
          />
        </div>
        {children}
      </div>
    </div>
  );
};
