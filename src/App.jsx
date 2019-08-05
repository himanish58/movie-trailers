import React, { Component } from 'react';

import getMovies from './requests/movies';

import CircularProgress from '@material-ui/core/CircularProgress';

import CardsContainer from './components/CardsContainer';
import Header from './components/Header';

class App extends Component {
	constructor() {
		super();
		this.state = {
			languages: [],
			genres: [],
			events: {},
			isLoading: true,
			selectedLanguages: [],
			selectedGenres: [],
			selectedEvents: {}
		};
	}

	componentDidMount() {
		getMovies()
			.then((response) => {
				const languages = response[0] || [];
				const events = response[1] || {};
				const selectedEvents = { ...events };
				const isLoading = false;
				let genres = [];
				Object.keys(events).map((eventId) => {
					let genre = events[eventId].EventGenre;
					if (genre.includes('|')) {
						genre = genre.split('|');
						return genres.push(...genre);
					} else {
						return genres.push(genre);
					}
				});
				genres = [...new Set(genres)];
				this.setState({ languages, events, genres, isLoading, selectedEvents });
			})
			.catch((error) => {
				console.error(`Error in App.componentDidMount.getMovies: ${error}`);
			});
	}

	checkGenre = (selectedGenres, EventGenre) => {
		EventGenre = EventGenre.split('|');
		for (let element of EventGenre) {
			if (selectedGenres.includes(element)) return true;
		}
		return false;
	};

	applyFilters = () => {
		let { selectedEvents, selectedLanguages, selectedGenres, events } = this.state;
		let selectedEventsLang = { ...events };
		let selectedEventsGenre = { ...events };

		Object.keys(events).map((eventId) => {
			if (selectedLanguages.length && !selectedLanguages.includes(selectedEventsLang[eventId].EventLanguage)) {
				delete selectedEventsLang[eventId];
			}
			if (selectedGenres.length && !this.checkGenre(selectedGenres, selectedEventsGenre[eventId].EventGenre)) {
				delete selectedEventsGenre[eventId];
			}
			return null;
		});
		selectedEvents = { ...selectedEventsLang, ...selectedEventsGenre };
		this.setState({ selectedEvents });
	};

	handleChangeLang = (e) => {
		this.setState({ selectedLanguages: e.target.value }, () => {
			this.applyFilters();
		});
	};

	handleChangeGenre = (e) => {
		console.log(e);
		this.setState({ selectedGenres: e.target.value }, () => {
			this.applyFilters();
		});
	};

	clearClickHandler = () => {
		let { selectedEvents, selectedLanguages, selectedGenres, events } = this.state;
		selectedEvents = { ...events };
		selectedLanguages = [];
		selectedGenres = [];
		this.setState({ selectedEvents, selectedLanguages, selectedGenres });
	};

	render() {
		let { isLoading, languages, genres, selectedLanguages, selectedGenres, selectedEvents } = this.state;
		return (
			<div className={`app ${isLoading ? 'no-data-center' : ''}`}>
				<Header
					languages={languages}
					genres={genres}
					handleChangeLang={this.handleChangeLang}
					handleChangeGenre={this.handleChangeGenre}
					selectedLanguages={selectedLanguages}
					selectedGenres={selectedGenres}
					clearClickHandler={this.clearClickHandler}
				/>
				{!Object.keys(selectedEvents).length && !isLoading ? (
					<h1 className="no-data-center">No Data Available</h1>
				) : null}
				{isLoading ? <CircularProgress color="primary" /> : <CardsContainer events={selectedEvents} />}
			</div>
		);
	}
}

export default App;
