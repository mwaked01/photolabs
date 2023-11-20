import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { topics, isFavPhotoExist, setTopicSelected } = props;
  return (
    <div className="top-nav-bar">
      <span onClick={()=>{setTopicSelected(0)}} className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} setTopicSelected={setTopicSelected}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  )
}

export default TopNavigation;