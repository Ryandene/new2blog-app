import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

function PopUpMessage() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={openModal}>Open Popup</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Popup Message"
      >
        <h2></h2>
        <p>Post Submitted</p>
        <button className="btn btn-primary" onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default PopUpMessage;
