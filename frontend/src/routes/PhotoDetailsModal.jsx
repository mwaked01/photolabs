import React, { useState, useEffect } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import photos from '../mocks/photos';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { toggleModal, modal, favPhotos, updateFavPhotos } = props;
  const isLiked = favPhotos.some((favPhoto) => favPhoto.id === modal.id);

  const setSimilarPhotos = (modalPhoto) => {
    const selectedPhoto = photos.find(photo => photo.id === modalPhoto.id);
    const similarPhotos = selectedPhoto.similar_photos;
    return similarPhotos;
  }

  const similarPhotos = ({ ...modal, similar_photos: setSimilarPhotos(modal) })

  return (
    <div className="photo-details-modal">
      {/* close button */}
      <button className="photo-details-modal__close-button" onClick={() => { toggleModal('off') }}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        {/* main image */}
        <PhotoFavButton photo={modal} onFavClick={updateFavPhotos} likeButton={isLiked ? 'liked' : ''} />
        <img src={modal.urls.full} alt="image" className="photo-details-modal__image" />
        {/* photographer details  */}
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={modal.user.profile} alt={modal.username} />
          <footer className="photo-details-modal__photographer-info ">
            <div>{modal.user.name}</div>
            <div className="photo-details-modal__photographer-location ">
              {`${modal.location.city}, ${modal.location.country}`}
            </div>
          </footer>
        </div>
        <header className='photo-details-modal__header'>
          Similar Photos
        </header>
        {/* {modal.similar_photos && Object.keys(modal.similar_photos).length > 0 ? (
          <PhotoList
            photos={Object.values(modal.similar_photos)}
            updateFavPhotos={updateFavPhotos}
            favPhotos={favPhotos}
            toggleModal={toggleModal}
          />
        ) : (
          <p>No similar photos available.</p>
        )} */}
        <PhotoList updateFavPhotos={updateFavPhotos} favPhotos={favPhotos} toggleModal={toggleModal} photos={Object.values(similarPhotos.similar_photos)} />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
