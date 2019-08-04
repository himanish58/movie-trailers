import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PlayIcon from '@material-ui/icons/PlayCircleOutlineSharp';

import CardExpandedView from './CardExpandedView';

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isExpanded: false
		};

		this.styles = {
			expandedHeight: {
				height: '750px'
			},
			nonExpandedHeight: {
				height: 'auto'
			},
			playIcon: {
				fontSize: '4rem',
				position: 'absolute',
				color: 'green'
			}
		};
	}

	cardClickHandler = () => {
		const previousElements = document.querySelectorAll('.expand-view');
		const cards = document.querySelectorAll('.card');
		if (cards && cards.length) {
			for (let element of cards) {
				element.style.height = '300px';
			}
		}
		if (previousElements && previousElements.length) {
			for (let element of previousElements) {
				element.parentNode.removeChild(element);
			}
		}
		this.setState({ isExpanded: true });
	};

	render() {
		const { event } = this.props;
		const { isExpanded } = this.state;
		let { ShowDate } = event;
		ShowDate = ShowDate.split(',');

		return (
			<div
				className="card pointer"
				style={isExpanded ? this.styles.expandedHeight : this.styles.nonExpandedHeight}
			>
				<div className="release-date-wrapper">
					<div className="release-date" onClick={this.cardClickHandler}>
						{ShowDate}
					</div>
				</div>
				{!isExpanded && (
					<div className="play-icon" onClick={this.cardClickHandler}>
						<PlayIcon style={this.styles.playIcon} />
					</div>
				)}
				<img
					key={event.EventCode}
					className={isExpanded ? 'img-border' : ''}
					src={`https://in.bmscdn.com/events/moviecard/${event.EventCode}.jpg`}
					alt="Event Thumbnail"
					onClick={this.cardClickHandler}
				/>
				{isExpanded && (
					<CardExpandedView
						event={event}
						background={`https://in.bmscdn.com/events/moviecard/${event.EventCode}.jpg`}
					/>
				)}
			</div>
		);
	}
}

Card.propTypes = {
	event: PropTypes.object,
	cardClickHandler: PropTypes.func
};

export default Card;
