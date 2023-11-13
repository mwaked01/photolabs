import React from "react";
import "../styles/PhotoListItem.scss";

import PhotoFavButton from './PhotoFavButton';


const PhotoListItem = (props) => {
  const { photos } = props;
  return (
    <section className="photo-list__item">
      
      <PhotoFavButton/>
      <img className="photo-list__image" src={photos.urls.regular} alt={photos.id} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photos.user.profile} alt={photos.username} />
        <footer className="photo-list__user-info">
          <div>{photos.user.name}</div>
          <div className="photo-list__user-location">
            {`${photos.location.city}, ${photos.location.country}`}
          </div>
        </footer>
      </div>
    </section>
  )
};

export default PhotoListItem;
