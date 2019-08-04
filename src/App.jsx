import React, { Component } from 'react';

import getMovies from './requests/movies';

import CircularProgress from '@material-ui/core/CircularProgress';

import CardsContainer from './components/CardsContainer';

class App extends Component {
	constructor() {
		super();
		this.state = {
			languages: [],
			genres: [],
			events: {},
			isLoading: true
		};
	}

	componentDidMount() {
		getMovies()
			.then((response) => {
				const languages = response[0] || [];
				const events = response[1] || {};
				const isLoading = false;
				let genres = Object.keys(events).map((eventId) => {
					let genre = events[eventId].EventGenre;
					if (genre.includes('|')) {
						genre = genre.split('|');
						return genre;
					} else {
						return genre;
					}
				});
				genres = [...new Set(genres)];
				this.setState({ languages, events, genres, isLoading });
			})
			.catch((error) => {
				console.error(`Error in App.componentDidMount.getMovies: ${error}`);
			});
	}

	render() {
		let { events, isLoading } = this.state;
		if (!Object.keys(events).length && !isLoading) {
			return <h1 className="center">No Data Available</h1>;
		}
		return (
			<div className={`app ${isLoading ? 'center' : ''}`}>
				{isLoading ? <CircularProgress color="primary" /> : <CardsContainer events={events} />}
			</div>
		);
	}
}

export default App;
