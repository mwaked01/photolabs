import React from 'react';

import '../styles/LikedPhotosModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
// import PhotoFavButton from 'components/PhotoFavButton';

const LikedPhotosModal = (props) => {
  const { setPhotoSelected, favPhotos, updateFavPhotos, setModal } = props;
  // const isLiked = favPhotos.some((favPhoto) => favPhoto.id === selectedPhoto.id);

  return (
    <div className="liked-photos-modal">
      <span className='liked-photos-modal__top-bar'>
        <span className="liked-photos-modal__logo">Liked Photos</span>
        <button className="liked-photos-modal__close-button" onClick={() => { setModal(false) }}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </span>
      <div className="liked-photos-modal__images">
        {favPhotos.length > 0? 
          <PhotoList updateFavPhotos={updateFavPhotos} favPhotos={favPhotos} setPhotoSelected={setPhotoSelected} photos={favPhotos} setModal={setModal} />:
          <div><h2>You have not added any photos yet!</h2><p>Tap the heart on any photo to show it some love. When you do, it will show up here.</p></div>
          
        }
      </div>
    </div>
  )
};

export default LikedPhotosModal;
