import React, { useState, useEffect } from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modal, setModal] = useState('off');

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
    <div className="App">
      <HomeRoute favPhotos={favPhotos} updateFavPhotos={updateFavPhotos} toggleModal={setModal} />
      {modal !== 'off' && <PhotoDetailsModal toggleModal={setModal} modal={modal} favPhotos={favPhotos} updateFavPhotos={updateFavPhotos} />}
    </div>
  );
};

export default App;
