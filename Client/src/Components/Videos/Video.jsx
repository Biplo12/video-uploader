import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import axios from "axios";

import noThumbnail from "../../assets/Images/no-thumbnail.png";
import noAvatar from "../../assets/Images/avatar.jpg";
const Video = ({ video }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/users/find/${video.userId}`
        );
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [video.userId]);

  return (
    <div className="video-container">
      <Link to={video.videoUrl}>
        <div className="video-thumbnail">
          <img src={video.thumbnail || noThumbnail} alt="video thumbnail" />
        </div>
      </Link>
      <div className="video-details">
        <Link to={video.userId}>
          <div className="channel">
            <img src={user.image || noAvatar} alt="channel avatar" />
          </div>
        </Link>
        <div className="video-info">
          <Link to={video.videoUrl}>
            <div className="video-title">
              <p>{video.title}</p>
            </div>
          </Link>
          <div className="video-channel-name">
            <Link to={video.userId}>
              <p>{user.name}</p>
            </Link>
          </div>
          <Link to={video.videoUrl}>
            <div className="video-details-bottom">
              <p>
                {`${video.views} views`}
                <span>&bull;</span>
                {`${format(video.createdAt)}`}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
