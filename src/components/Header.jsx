import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { withWidth } from '@material-ui/core';

const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: 48 * 4.5 + 8,
			width: 250,
			color: 'green'
		}
	}
};
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedLanguages: [],
			selectedGenres: []
		};

		this.styles = {
			inputLabel: {
				color: 'green',
				marginLeft: '1rem'
			},
			form: {
				width: '12rem',
				background: '#1a1a1a',
				marginRight: '1rem'
			},
			button: {
				width: '120px',
				border: '1px solid green',
				color: 'green'
			}
		};
	}

	render() {
		let { languages, genres, selectedLanguages, selectedGenres } = this.props;

		return (
			<div className="header">
				<div className="title">Movie Trailers</div>
				<div className="selects">
					<FormControl style={this.styles.form}>
						<InputLabel style={this.styles.inputLabel} htmlFor="select-multiple-checkbox">
							Languages
						</InputLabel>
						<Select
							style={this.styles.inputLabel}
							multiple
							value={selectedLanguages}
							onChange={this.props.handleChangeLang}
							input={<Input id="select-multiple-checkbox" />}
							renderValue={(selected) => selected.join(', ')}
							MenuProps={MenuProps}
						>
							{languages.map((lang) => (
								<MenuItem key={lang} value={lang}>
									<Checkbox checked={selectedLanguages.indexOf(lang) > -1} />
									<ListItemText primary={lang} />
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<FormControl style={this.styles.form}>
						<InputLabel style={this.styles.inputLabel} htmlFor="select-multiple-checkbox">
							Genres
						</InputLabel>
						<Select
							style={this.styles.inputLabel}
							multiple
							value={selectedGenres}
							onChange={this.props.handleChangeGenre}
							input={<Input id="select-multiple-checkbox" />}
							renderValue={(selected) => selected.join(', ')}
							MenuProps={MenuProps}
						>
							{genres.map((genre) => (
								<MenuItem key={genre} value={genre}>
									<Checkbox checked={selectedGenres.indexOf(genre) > -1} />
									<ListItemText primary={genre} />
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<Button style={this.styles.button} onClick={this.props.clearClickHandler}>
						Clear
					</Button>
				</div>
			</div>
		);
	}
}

Header.propTypes = {
	languages: PropTypes.array,
	genres: PropTypes.array,
	handleChangeLang: PropTypes.func,
	handleChangeGenre: PropTypes.func,
	selectedLanguages: PropTypes.array,
	selectedGenres: PropTypes.array,
	clearClickHandler: PropTypes.func
};

export default Header;
