import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { topic, setTopicSelected, selectedTopic } = props;

  const topicStyle = topic.id === selectedTopic ? { textDecoration: 'overline', color: 'rgb(11, 180, 129)' } : { }

  const handleTopicClick = () => {
    setTopicSelected(topic.id)
  }

  return (
    <>
      <div className="topic-list__item">
        <span onClick={handleTopicClick} style={topicStyle}>{topic.title}</span>
      </div>
    </>
  );
};

export default TopicListItem;
