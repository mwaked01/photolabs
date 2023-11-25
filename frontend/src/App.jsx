import React, { useState, useEffect } from 'react';
// import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import LikedPhotosModal from 'routes/LikedPhotosModal';

const App = () => {
  const {
    state,
    setPhotoSelected,
    updateToFavPhotos,
    setTopicSelected,
    setModal
  } = useApplicationData();

  const { selectedPhoto, favPhotos, photoData, topicData, selectedTopic, displayModal } = state;

  return (
    <div className="App">
      <HomeRoute photos={photoData} topics={topicData} favPhotos={favPhotos} updateFavPhotos={updateToFavPhotos} setPhotoSelected={setPhotoSelected} setTopicSelected={setTopicSelected} selectedTopic={selectedTopic} setModal={setModal} />
      {displayModal === 'PhotoDetails' && <PhotoDetailsModal photos={photoData} setPhotoSelected={setPhotoSelected} selectedPhoto={selectedPhoto} favPhotos={favPhotos} updateFavPhotos={updateToFavPhotos} setModal={setModal} />}
      {displayModal === 'LikedPhotos' && <LikedPhotosModal setPhotoSelected={setPhotoSelected} favPhotos={favPhotos} updateFavPhotos={updateToFavPhotos} setModal={setModal} />}
    </div>
  );
};

export default App;
