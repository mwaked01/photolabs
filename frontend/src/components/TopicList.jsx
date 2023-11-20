import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
// import topics from '../mocks/topics';


const TopicList = (props) => {
  const {topics} = props;
  return (
    <div className="top-nav-bar__topic-list">
      
      {topics.map((_, index) => (
        <TopicListItem
          key={topics[index].id}
          topics={topics[index]}
        />
      ))}
    </div>
  );
};

export default TopicList;
