import "./VideoItem.css";
import React from "react";
import { getTimeFromTimeStamp } from "../utils/timeHelper";
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        <p className="align-self-end">{video.snippet.channelTitle}</p>
        <p>{getTimeFromTimeStamp(video.snippet.publishTime)}</p>
      </div>
    </div>
  );
};

export default VideoItem;
