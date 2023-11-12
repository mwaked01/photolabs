import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { sampleDataForPhotoListItem } = props;
  return (
    <section className="photo-list__item">
      <img className="photo-list__image" src={sampleDataForPhotoListItem.imageSource} alt={sampleDataForPhotoListItem.id} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={sampleDataForPhotoListItem.profile} alt={sampleDataForPhotoListItem.username} />
        <footer className="photo-list__user-info">
          <div>{sampleDataForPhotoListItem.username}</div>
          <div className="photo-list__user-location">
            {`${sampleDataForPhotoListItem.location.city}, ${sampleDataForPhotoListItem.location.country}`}
          </div>
        </footer>
      </div>
    </section>
  )
};

export default PhotoListItem;
