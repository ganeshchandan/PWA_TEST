import { useDispatch } from "react-redux";
import { setSelectedTopic } from "../../../reducers/topic";
import { ISelectedTopic } from "../../../type";
import ActionBar from "./action-bar";
import { formatDescription } from "../../../utils/app";

const SelectedTopic = ({
  selectedTopic,
}: {
  selectedTopic: ISelectedTopic;
}) => {
  const dispatch = useDispatch();
  const {
    topic_image,
    topic_title,
    topic_short_description,
    topic_saved_date,
  } = selectedTopic;

  const backToTopicList = () => {
    dispatch(setSelectedTopic({ ...selectedTopic, isSelected: false }));
  };

  return (
    <div className="selected-topic">
      <div className="selected-topic-content">
        <div className="selected-topic-image">
          <img src={topic_image} alt="Topic" />
        </div>
        <div className="selected-topic-description">
          <div className="topic-title">{topic_title}</div>
          <div className="topic-saved-date">{topic_saved_date}</div>
          <div className="topic-description">
            {formatDescription(topic_short_description)}
          </div>
        </div>
      </div>
      <ActionBar backToTopicList={backToTopicList} />
    </div>
  );
};

export default SelectedTopic;
