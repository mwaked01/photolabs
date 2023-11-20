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
    setTopicSelected,
  } = useApplicationData();

  const { selectedPhoto, favPhotos, photoData, topicData,selectedTopic } = state;

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



  return (
    <div className="App">
      <HomeRoute photos={photoData} topics={topicData} favPhotos={favPhotos} updateFavPhotos={updateToFavPhotos} toggleModal={setPhotoSelected} setTopicSelected={setTopicSelected} />
      {selectedPhoto !== 'off' && <PhotoDetailsModal photos={photoData} toggleModal={setPhotoSelected} selectedPhoto={selectedPhoto} favPhotos={favPhotos} updateFavPhotos={updateToFavPhotos} />}
    </div>
  );
};

export default App;
