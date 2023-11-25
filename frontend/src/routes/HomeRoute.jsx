import React, { useState, useEffect } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const { photos, topics, favPhotos, updateFavPhotos, setPhotoSelected, setTopicSelected, selectedTopic, setModal } = props;
  // useEffect(() => {
  //   console.log(favPhotos.length);
  // });
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={favPhotos.length > 0 ? 'yes' : ''} setTopicSelected={setTopicSelected} selectedTopic={selectedTopic} setModal={setModal} />
      <PhotoList updateFavPhotos={updateFavPhotos} favPhotos={favPhotos} setPhotoSelected={setPhotoSelected} photos={photos} setModal={setModal}/>
    </div>
  );
}

export default HomeRoute;