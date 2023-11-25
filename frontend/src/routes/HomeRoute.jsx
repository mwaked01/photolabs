import React, { useState, useEffect } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const { photos, topics, favPhotos, updateFavPhotos, toggleModal, setTopicSelected, selectedTopic } = props;
  // useEffect(() => {
  //   console.log(favPhotos.length);
  // });
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={favPhotos.length > 0 ? 'yes' : ''} setTopicSelected={setTopicSelected} selectedTopic={selectedTopic}/>
      <PhotoList updateFavPhotos={updateFavPhotos} favPhotos={favPhotos} toggleModal={toggleModal} photos={photos} />
    </div>
  );
}

export default HomeRoute;