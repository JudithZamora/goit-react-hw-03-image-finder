import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, src, alt }) => {
  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    isOpen && (
      <div className="Overlay" onClick={handleCloseModal}>
        <div className="Modal">
          <img src={src} alt={alt} />
        </div>
      </div>
    )
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Modal;
