import { useState } from 'react';

const useApplicationData = () => {

  const [state, setState] = useState({
    selectedPhoto: 'off',
    favPhotos: []
  });

  const updateToFavPhotos = (photo) => {
    const photoId = photo.id;
    setState((prevState) => {
      if (prevState.favPhotos.some((favPhoto) => favPhoto.id === photo.id)) {
        return { ...prevState, favPhotos: prevState.favPhotos.filter((favPhoto) => favPhoto.id !== photoId) };
      } else {
        return { ...prevState, favPhotos: [...prevState.favPhotos, photo] };
      }
    });
  };

  const setPhotoSelected = (photo) => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto: photo,
    }));
  };

  const onClosePhotoDetailsModal = () => {
    setState((prevState) => ({
      ...prevState,
      selectedPhoto: 'off',
    }));
  };

  return {
    state,
    setPhotoSelected,
    updateToFavPhotos,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
