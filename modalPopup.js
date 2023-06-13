import React from 'react';
import { Modal } from '@mui/material';

const ModalPopup = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-popup"
      aria-describedby="modal-popup-description"
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100vw',
        }}
      >
        {children}
      </div>
    </Modal>
  );
};

export default ModalPopup;




import React, { useState } from 'react';
import ModalPopup from './ModalPopup';
import YourComponent from './YourComponent';

const MainComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleModalOpen}>Open Modal</button>
      <ModalPopup isOpen={isModalOpen} onClose={handleModalClose}>
        <YourComponent />
      </ModalPopup>
    </div>
  );
};

export default MainComponent;
