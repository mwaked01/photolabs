import React, { useState } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { toggleModal, modal } = props;
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => { toggleModal('off') }}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
