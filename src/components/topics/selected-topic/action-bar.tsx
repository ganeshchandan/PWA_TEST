import { BOOKMARK, SHARE } from "@constants";
import { useBookmarkAction } from "@hooks";
import { IActionBar } from "@types";
import {
  BackArrow,
  ShareIcon,
  BookmarkIcon,
  BookmarkIconFilled,
} from "@assets";
import IconWithName from "../../common/icon-with-name";

const ActionBar = ({
  backToTopicList,
  handleShare,
  topic,
  bookmarkDetails,
  enableBookmarkAndShare,
}: IActionBar) => {
  const { topicBookmark } = useBookmarkAction();
  const { bookmark_id, isLoading } = bookmarkDetails || {};

  const handleBookmark = () => {
    if (enableBookmarkAndShare && topic) {
      topicBookmark(topic);
    }
  };

  return (
    <div className="selected-topic-actionbar">
      <img
        src={BackArrow}
        alt="Back to topic List"
        onClick={backToTopicList}
        // onTouchEnd={backToTopicList}
        className="back-to-topic-list"
      />
      {enableBookmarkAndShare && (
        <div className="share-bookmark-icons">
          <IconWithName
            name={SHARE}
            imageUrl={ShareIcon}
            imageAlt={SHARE}
            className="icon-with-name"
            onClick={handleShare}
          />
          {isLoading ? (
            <div className="icon-with-name" style={{ width: "3.438rem" }}>
              <div className="dot-loader">
                <div className="dot dot-1" />
                <div className="dot dot-2" />
                <div className="dot dot-3" />
              </div>
            </div>
          ) : (
            <IconWithName
              name={BOOKMARK}
              imageUrl={bookmark_id ? BookmarkIconFilled : BookmarkIcon}
              imageAlt={BOOKMARK}
              className="icon-with-name"
              onClick={handleBookmark}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ActionBar;