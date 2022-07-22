import { useState, useEffect } from "react";
import axios from "axios";
import Video from "./Video";

const Videos = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/videos/${type}`);
        setVideos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchVideos();
  }, [type]);

  return (
    <div className="videos-container">
      {videos.map((video) => (
        <Video key={video._id} video={video} />
      ))}
    </div>
  );
};

export default Videos;
