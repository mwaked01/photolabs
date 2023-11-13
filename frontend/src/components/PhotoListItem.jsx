import React from "react";
import "../styles/PhotoListItem.scss";

import PhotoFavButton from './PhotoFavButton';


const PhotoListItem = (props) => {
  const { sampleDataForPhotoList } = props;
  return (
    <section className="photo-list__item">
      
      <PhotoFavButton/>
      <img className="photo-list__image" src={sampleDataForPhotoList.urls.regular} alt={sampleDataForPhotoList.id} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={sampleDataForPhotoList.user.profile} alt={sampleDataForPhotoList.username} />
        <footer className="photo-list__user-info">
          <div>{sampleDataForPhotoList.user.name}</div>
          <div className="photo-list__user-location">
            {`${sampleDataForPhotoList.location.city}, ${sampleDataForPhotoList.location.country}`}
          </div>
        </footer>
      </div>
    </section>
  )
};

export default PhotoListItem;
