import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCX8mtOSEKGJsrDehFTsxdxzhC667GBtms';

//create new component. it'll produce some HTML content.
//this is actually factory function, and we can't pass it directly to ReactDOM for rendering[check video 9].
//we have to make an instance of it. And in JSX we can make an instace of class like this: <className></className>
// const App = function () {
// 	return (
// 			<div>
// 				{ render the instance of SearchBar }
// 				<SearchBar />
// 			</div>
// 		);
// };

//let's re-write the above code with class based comp.

class App extends Component {

	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			//chec video-28 for more info
			selectedVideo: null
		};
		//but we still have to initialize the search when new instance is created
		//means when the DOM is loaded for the first time we'll, pass all of the constructor property
		this.videoSearch('surfboards');
	}
	//whenever the instace of comp. renders, we will kick a search and when the search is completes, 
	//set this.state with new videos.
	videoSearch(searchKeyWord) {
		YTSearch({ key: API_KEY, term: searchKeyWord }, videos => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
			// same as this.setState({ videos: videos })
		});
	}

	render() {
		//we're calling searchKeyWord func. every 400ms
		const videoSearch = _.debounce(searchKeyWord => this.videoSearch(searchKeyWord), 400);

		return (
			<div>
				{/* render the instance of SearchBar */}
				<SearchBar onSearchTermChange={videoSearch} />
				{/* 
					App is parent of VideoList so it has access to video list on App state, and we need some reference for it.
					So we need to pass some data from parent comp. App in to child comp. VideoList.
					Use videos on VideoList and fetch it from this.state.videos, sp passing data like this in React is called
					props, means we're passing props videos to VideoList. And any time App re-renders [means when setting state]
					VideoList will get new videos.
					And this prop obj. will be passed to func. comp. as arguments.
					**NOTE: In class based comp. props are available anywhere in method we define and you can call it as this.props.
									So whenever we use class based comp. use this.props and for functional comp. simply use props
				*/}
				{/* double check the prop name whenever you use */}
				<VideoDetail video_item={this.state.selectedVideo} />
				{/*
					below one is identical to this
				 	onVideoSelect={selectedVideo => this.setState({selectedVideo: selectedVideo})}

				 	And we're passing it as a prop to a video_list 
				*/}
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}
//take this component's generated HTMl and put it on page(in the DOM).
//Now let's pass an instace of the factory func. or class like this: <App></App>.
//if we are not passing anything inside the instace then we can use it's shortform like below, a self closing tag.
//pass the container element where you want to render the App instance as a second argument to render method.
ReactDOM.render(<App />, document.querySelector('.container'));