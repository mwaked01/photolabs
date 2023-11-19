import React, { useState, useEffect } from 'react';
// import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    state,
    setPhotoSelected,
    updateToFavPhotos,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  const { selectedPhoto, favPhotos } = state;

  const [modal, setModal] = useState('off');

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
    console.log(favPhotos);
  });

  return (
    <div className="App">
      <HomeRoute favPhotos={favPhotos} updateFavPhotos={updateToFavPhotos} toggleModal={setPhotoSelected} />
      {selectedPhoto !== 'off' && <PhotoDetailsModal toggleModal={setPhotoSelected} selectedPhoto={selectedPhoto} favPhotos={favPhotos} updateFavPhotos={updateToFavPhotos} />}
    </div>
  );
};

export default App;
