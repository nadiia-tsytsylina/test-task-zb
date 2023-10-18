import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, Modal, ErrorMessage, CloseButton } from './ErrorModal.styled';
import Cross from '../../Assets/Images/Svg/cross.svg';

const modalRoot = document.querySelector('#modal-root');

export default function ErrorModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <Modal>
        <CloseButton type="button" onClick={onClose}>
          <img src={Cross} alt="close buton" width={20} />
        </CloseButton>
        <ErrorMessage>
          Sorry, something went wrong. <br /> Please, try again
        </ErrorMessage>
      </Modal>
    </Overlay>,
    modalRoot
  );
}
