import React from "react";
import { Link } from "react-router-dom";
const Video = ({
  direction,
  thumbnail,
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
          <div className="video-channel">
            <img src={profileAvatar} alt="profile avatar" />
            <p>{channelName}</p>
          </div>
          <div className="video-details">
            <div className="video-title">
              <p>{title}</p>
            </div>
            <div className="details-bottom">
              <div className="video-views">
                <p>{`${views} views`}</p>
              </div>
              <div className="video-date">
                <p>{`${date} days ago`}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Video;
