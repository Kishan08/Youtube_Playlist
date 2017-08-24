//we don't need any state for this comp. and doesn't record any user reaction we can make
//it as plain functional comp.
import React from 'react';
import VideoListItem from './video_list_item';
//and when we use functional comp. props obj. will be passed as argument inside our func.
const VideoList = (props) => {
	//we're using prop name videos here which is defined in index.js App class
	const videoItem = props.videos.map((video) => {
		return (
			<VideoListItem
				onVideoSelect={props.onVideoSelect} 
				key={video.etag} 
				video_item={video}/>
		);	
	});

	return (
			<ul className="col-md-4 list-group">
				{videoItem}
			</ul>
		);
};

export default VideoList;