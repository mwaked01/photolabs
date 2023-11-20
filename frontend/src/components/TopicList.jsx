import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
// import topics from '../mocks/topics';


const TopicList = (props) => {
  const {topics,setTopicSelected} = props;
  return (
    <div className="top-nav-bar__topic-list">
      
      {topics.map((_, index) => (
        <TopicListItem
          key={topics[index].id}
          topic={topics[index]}
          setTopicSelected={setTopicSelected}
        />
      ))}
    </div>
  );
};

export default TopicList;
