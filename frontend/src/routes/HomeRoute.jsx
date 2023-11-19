import React, { useState, useEffect } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import photos from '../mocks/photos';
const HomeRoute = (props) => {
  const { favPhotos, updateFavPhotos, toggleModal } = props;
  // useEffect(() => {
  //   console.log(favPhotos.length);
  // });
  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={favPhotos.length > 0 ? 'yes' : ''} />
      <PhotoList updateFavPhotos={updateFavPhotos} favPhotos={favPhotos} toggleModal={toggleModal} photos={photos}/>
    </div>
  );
}

export default HomeRoute;