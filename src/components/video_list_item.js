import React from 'react';

const VideoListItem = ({video_item, onVideoSelect}) => {
	//above argument is identical to below code
	// const video_item = props.video_item;
	//fetch url from the responce we got from youtube-api
	const imageURL = video_item.snippet.thumbnails.default.url;

	return (
		<li onClick={() => onVideoSelect(video_item)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageURL} />
				</div>
				<div className="media-body">
					<div className="media-heading">{video_item.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;