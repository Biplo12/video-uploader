import React from "react";
import { Link } from "react-router-dom";
const Video = ({
  direction,
  thumbnail,
  profileDirection,
  profileAvatar,
  channelName,
  title,
  views,
  date,
}) => {
  return (
    <div className="video-container">
      <Link to={direction}>
        <div className="video-thumbnail">
          <img src={thumbnail} alt="video thumbnail" />
        </div>

        <div className="video-details">
          <Link to={profileDirection}>
            <div className="channel">
              <img src={profileAvatar} alt="channel avatar" />
            </div>
          </Link>
          <div className="video-info">
            <div className="video-title">
              <p>{title}</p>
            </div>
            <Link to={profileDirection}>
              <div className="video-channel-name">
                <p>{channelName}</p>
              </div>
            </Link>
            <div className="video-details-bottom">
              <p>
                {`${views} views`}
                <span>&bull;</span>
                {`${date} days ago`}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Video;
