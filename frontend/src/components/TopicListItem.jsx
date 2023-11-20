import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  const { topic,setTopicSelected } = props;

  const handleTopicClick = () => {
    setTopicSelected(topic.id)
  }

  return (
    <>
    <div className="topic-list__item">
      <span onClick={handleTopicClick} >{topic.title}</span>
    </div>
    </>
  );
};

export default TopicListItem;
