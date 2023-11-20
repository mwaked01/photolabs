import React, { useState, useEffect } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const { photos, topics, favPhotos, updateFavPhotos, toggleModal } = props;
  // useEffect(() => {
  //   console.log(favPhotos.length);
  // });
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={favPhotos.length > 0 ? 'yes' : ''} />
      <PhotoList updateFavPhotos={updateFavPhotos} favPhotos={favPhotos} toggleModal={toggleModal} photos={photos} />
    </div>
  );
}

export default HomeRoute;