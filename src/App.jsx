import React, { Component } from 'react';
import './App.scss';

import getMovies from './requests/movies';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		getMovies()
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.error(`Error in App.componentDidMount.getMovies: ${error}`);
			});
	}

	render() {
		return (
			<div className="App">
				<h1>Hello World</h1>
			</div>
		);
	}
}

export default App;
