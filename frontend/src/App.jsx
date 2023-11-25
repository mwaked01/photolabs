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

  const { selectedPhoto, favPhotos, photoData, topicData, selectedTopic } = state;

  return (
    <div className="App">
      <HomeRoute photos={photoData} topics={topicData} favPhotos={favPhotos} updateFavPhotos={updateToFavPhotos} toggleModal={setPhotoSelected} setTopicSelected={setTopicSelected} selectedTopic={selectedTopic}/>
      {selectedPhoto !== 'off' && <PhotoDetailsModal photos={photoData} toggleModal={setPhotoSelected} selectedPhoto={selectedPhoto} favPhotos={favPhotos} updateFavPhotos={updateToFavPhotos} />}
    </div>
  );
};

export default App;
