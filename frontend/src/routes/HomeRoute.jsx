import React, { useState, useEffect } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = () => {
  const [favPhotos, setFavPhotos] = useState([]);

  const updateFavPhotos = (photo) => {
    const photoId = photo.id;
    setFavPhotos((currentFavPhotos) => {
      if (currentFavPhotos.some((favPhoto) => favPhoto.id === photo.id)) {
        return currentFavPhotos.filter((favPhoto) => favPhoto.id !== photoId);
      } else {
        return [...currentFavPhotos, photo];
      }
    });
  };

  useEffect(() => {
    console.log(favPhotos);
  });

  return (
    <div className="home-route">
      <TopNavigationBar isFavPhotoExist={favPhotos.length > 0 ? 'yes' : ''} />
      <PhotoList updateFavPhotos={updateFavPhotos} favPhotos={favPhotos} />
    </div>
  );
}

export default HomeRoute;