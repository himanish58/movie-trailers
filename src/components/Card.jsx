import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { PlayIcon } from '@material-ui/icons/PlayCircleOutline';

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

		return (
			<div
				className="card pointer"
				style={this.state.isExpanded ? this.styles.expandedHeight : this.styles.nonExpandedHeight}
			>
				{/* <PlayIcon /> */}
				<img
					key={event.EventCode}
					src={`https://in.bmscdn.com/events/moviecard/${event.EventCode}.jpg`}
					alt="Event Thumbnail"
					onClick={this.cardClickHandler}
				/>
				{this.state.isExpanded && (
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
