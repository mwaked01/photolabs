import React, { useState } from "react";
import "../styles/PhotoListItem.scss";

import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { photo, favPhotos, onFavClick, setPhotoSelected,setModal } = props;
  const isLiked = favPhotos.some((favPhoto) => favPhoto.id === photo.id);


  const handlePhotoClick = () => {
    setModal('PhotoDetails');
    setPhotoSelected(photo);
  }
  return (
    <section className="photo-list__item">
      <PhotoFavButton photo={photo} onFavClick={onFavClick} likeButton={isLiked ? 'liked' : ''} />
      <img onClick={handlePhotoClick} className="photo-list__image" src={photo.urls.regular} alt={photo.id} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} alt={photo.username} />
        <footer className="photo-list__user-info">
          <div >{photo.user.name}</div>
          <div className="photo-list__user-location">
            {`${photo.location.city}, ${photo.location.country}`}
          </div>
        </footer>
      </div>
    </section>
  )
};

export default PhotoListItem;
