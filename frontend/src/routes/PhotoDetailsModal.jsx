import React, { useState, useEffect } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
// import photos from '../mocks/photos';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { photos, toggleModal, selectedPhoto, favPhotos, updateFavPhotos } = props;
  const isLiked = favPhotos.some((favPhoto) => favPhoto.id === selectedPhoto.id);

  const setSimilarPhotos = (modalPhoto) => {
    const selectedPhoto = photos.find(photo => photo.id === modalPhoto.id);
    const similarPhotos = selectedPhoto.similar_photos;
    return similarPhotos;
  }

  const similarPhotos = ({ ...selectedPhoto, similar_photos: setSimilarPhotos(selectedPhoto) })

  return (
    <div className="photo-details-modal">
      {/* close button */}
      <button className="photo-details-modal__close-button" onClick={() => { toggleModal('off') }}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        {/* main image */}
        <PhotoFavButton photo={selectedPhoto} onFavClick={updateFavPhotos} likeButton={isLiked ? 'liked' : ''} />
        <img src={selectedPhoto.urls.full} alt="image" className="photo-details-modal__image" />
        {/* photographer details  */}
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={selectedPhoto.user.profile} alt={selectedPhoto.username} />
          <footer className="photo-details-modal__photographer-info ">
            <div>{selectedPhoto.user.name}</div>
            <div className="photo-details-modal__photographer-location ">
              {`${selectedPhoto.location.city}, ${selectedPhoto.location.country}`}
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
