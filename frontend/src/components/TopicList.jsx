import React from "react";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const {topics,setTopicSelected,selectedTopic} = props;
  return (
    <div className="top-nav-bar__topic-list">
      
      {topics.map((_, index) => (
        <TopicListItem
          key={topics[index].id}
          topic={topics[index]}
          setTopicSelected={setTopicSelected}
          selectedTopic={selectedTopic}
        />
      ))}
    </div>
  );
};

export default TopicList;
