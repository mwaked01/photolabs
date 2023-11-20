import React, { useState, useEffect } from 'react';
// import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import photos from './mocks/photos';

const App = () => {
  const {
    state,
    setPhotoSelected,
    updateToFavPhotos,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const { selectedPhoto, favPhotos, photoData, topicData } = state;

  // const [modal, setModal] = useState('off');

  // const [favPhotos, setFavPhotos] = useState([]);

  // const updateFavPhotos = (photo) => {
  //   const photoId = photo.id;
  //   setFavPhotos((currentFavPhotos) => {
  //     if (currentFavPhotos.some((favPhoto) => favPhoto.id === photo.id)) {
  //       return currentFavPhotos.filter((favPhoto) => favPhoto.id !== photoId);
  //     } else {
  //       return [...currentFavPhotos, photo];
  //     }
  //   });
  // };

  useEffect(() => {
    console.log(selectedPhoto);
  });

  return (
    <div className="App">
      <HomeRoute photos={photoData} topics={topicData} favPhotos={favPhotos} updateFavPhotos={updateToFavPhotos} toggleModal={setPhotoSelected} />
      {selectedPhoto !== 'off' && <PhotoDetailsModal photos={photoData} toggleModal={setPhotoSelected} selectedPhoto={selectedPhoto} favPhotos={favPhotos} updateFavPhotos={updateToFavPhotos} />}
    </div>
  );
};

export default App;
