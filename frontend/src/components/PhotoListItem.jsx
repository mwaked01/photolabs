import React, { useState } from "react";
import "../styles/PhotoListItem.scss";

import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { photo, favPhotos, onFavClick,toggleModal } = props;
  const isLiked = favPhotos.some((favPhoto) => favPhoto.id === photo.id);

  const handleLikeClick = () => {
    onFavClick(photo);
  }

  return (
    <section className="photo-list__item">
      <PhotoFavButton onClick={(handleLikeClick)} likeButton={isLiked ? 'liked' : ''} />
      <img onClick={()=>{toggleModal(photo)}} className="photo-list__image" src={photo.urls.regular} alt={photo.id} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} alt={photo.username} />
        <footer className="photo-list__user-info">
          <div>{photo.user.name}</div>
          <div className="photo-list__user-location">
            {`${photo.location.city}, ${photo.location.country}`}
          </div>
        </footer>
      </div>
    </section>
  )
};

export default PhotoListItem;
