import React from 'react';

import '../styles/TopNavigationBar.scss'
import "../styles/TopicList.scss";

import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { topics, isFavPhotoExist, setTopicSelected, selectedTopic, setModal } = props;
  return (
    <div className="top-nav-bar">
      <span onClick={() => { setTopicSelected(0) }} className="top-nav-bar__logo">PhotoLabs</span>
      <div className='top-nav-bar__topic-list'>
        <TopicList topics={topics} setTopicSelected={setTopicSelected} selectedTopic={selectedTopic} />
        <FavBadge isFavPhotoExist={isFavPhotoExist} setModal={setModal} />
      </div>
    </div>
  )
}

export default TopNavigation;