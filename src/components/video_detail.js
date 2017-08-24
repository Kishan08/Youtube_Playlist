//check video-26 why i'm using functional comp. 
import React from 'react';

const VideoDetail = ({video_item}) => {

	if(!video_item){
		return <div>Loading....</div>
	}

	const videoID = video_item.id.videoId,
				videoURL = `http://www.youtube.com/embed/${videoID}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={videoURL}></iframe>
			</div>
			<div className="detail">
				<div>{video_item.snippet.title}</div>
				<div>{video_item.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;