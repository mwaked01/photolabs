import { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      const photoIdToAdd = action.payload.id;
      if (state.favPhotos.some((favPhoto) => favPhoto.id === photoIdToAdd)) {
        return { ...state, favPhotos: state.favPhotos.filter((favPhoto) => favPhoto.id !== photoIdToAdd) };
      } else {
        return { ...state, favPhotos: [...state.favPhotos, action.payload] };
      }
    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.payload };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return { ...state, selectedPhoto: action.payload === 'off' ? 'off' : state.selectedPhoto };
    case 'SET_PHOTO_DATA':
      return { ...state, photoData: action.payload };
    case 'SET_TOPIC_DATA':
      return { ...state, topicData: action.payload };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);

  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, []);

  const [state, dispatch] = useReducer(reducer, {
    selectedPhoto: 'off',
    favPhotos: [],
    photoData: [],
    topicData: []
  });

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: 'off' });
  };

  const updateToFavPhotos = (photo) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photo });
  };

  return {
    state,
    setPhotoSelected,
    updateToFavPhotos,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
