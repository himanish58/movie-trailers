import React, { Component } from 'react';

import getMovies from './requests/movies';

import CardsContainer from './components/CardsContainer';

class App extends Component {
	constructor() {
		super();
		this.state = {
			languages: [],
			geners: [],
			events: {}
		};
	}

	componentDidMount() {
		getMovies()
			.then((response) => {
				console.log(response);
				const languages = response[0] || [];
				const events = response[1] || {};
				// const geners = [];
				let geners = Object.keys(events).map((eventId) => {
					return events[eventId].EventGenre;
				});
				geners = [...new Set(geners)];
				this.setState({ languages, events, geners });
			})
			.catch((error) => {
				console.error(`Error in App.componentDidMount.getMovies: ${error}`);
			});
	}

	render() {
		return (
			<div className="App">
				<CardsContainer events={this.state.events} />
			</div>
		);
	}
}

export default App;
