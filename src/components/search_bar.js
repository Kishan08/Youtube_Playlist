//import react and pull the property Component and store it in Component variable
//like this const Component = React.Component;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//this is functional components, cause we're using function to define components.
//but can define it with class based comp.
// const SearchBar = () => {
// 	return <input />;
// };
//i.e create a class and give it access to all functionality that React.Component has. or
//it gives SearchBar a bunch of functionality from React.Component class
//render is method of class and every class must have this method and it must return JSX.
class SearchBar extends Component {
	// render() {
	// 	//createa new input element and pass prop or property onChange with specified value.
	// 	//And this react property, and don't forget to put the parenthesis.
	// 	return <input onChange={this.onInputChage} />;
	// }
	// //this is event handler
	// //use it like on or handle, then which name of element like input in our case and then name of the event
	// onInputChage(event) {
	// 	console.log(event.target.value);
	// }

	//state is plain js object that is use to record and react to user event, each class based comp. has it's
	//own state obj. whenever a comp. state is changed, the comp. immediately re-renders and also forces it's
	//children to re-render. And each instace of class has it's own copy of state obj.
	// So id SearchBar has some state and supose it changed then the render func. would be re ran
	//and if had other comp. inside of it would also be re-render.
	//Before we use state inside of comp. we have to initialize the state obj.
	//And we have to initialize it inside class constructor and set state as plain js obj. inside class const.
	//functional comp. do not have state obj. only class base comp. have
	constructor(props) {
		super(props);
		//inside of const. we have to define state like below, and anywhere outside the const. use setState
		//property to set the state of component, just refer inside render function for more info.
		this.state = { searchKeyWord: '' };
	}  

	//with arrow func. we can make the upper code more readable like this:
	render() {
		// on the input element we're setting the state value and on the very next line we're displaying it.
		//if you want to reference js variable, wrap them in {}
		//here we set the state with this.state.searchKeyWord with whatever we tyoe inside the input box
		//and whenever we update our state with this.setState it causes our comp. to automatically re-render.
		//and push all the updated info. from render method to DOM.
		return (
			<div className="search-bar">
					{/* 
						try to comment onChage line, now you can't type anything inside the input box
						the reason is we're setting the value of input to this.state.searchKeyWord which in our
						case is '' if you're not setting the state value. Instead of empty string we can also use
						some other info that is visible to user before updating the state.
						This is called controlled comp. in React, without setting the state we can't chage it's value.
						A controlled comp. has it's value set by state, so it's value only ever changes when
						state changes. Refer video-18 for more info 
					*/}
				<input   
					value={this.state.searchKeyWord}
					onChange={event => this.onInputChage(event.target.value)} />
				{/* this is how comment looks like in JSX */}
				{/* just un-comment the below code, that's how we're displaying the value we set on previous line  */}
				{/* Value of input: {this.state.searchKeyWord} */}
			</div>
		);
	}

	onInputChage (searchKeyWord){
		//we want to set the state with searchKeyWord
		this.setState({searchKeyWord});
		//and call the callback we got from index.js file within App class wit this new searchKeyWord
		this.props.onSearchTermChange(searchKeyWord);
	}

}

export default SearchBar;