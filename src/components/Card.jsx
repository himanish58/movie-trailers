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
				height: '850px'
			},
			nonExpandedHeight: {
				height: 'auto'
			}
		};
	}

	cardClickHandler = () => {
		this.setState({ isExpanded: true });
	};

	render() {
		const { event } = this.props;

		return (
			<div
				className="card"
				style={this.state.isExpanded ? this.styles.expandedHeight : this.styles.nonExpandedHeight}
			>
				{/* <PlayIcon /> */}
				<img
					key={event.EventCode}
					src={`https://in.bmscdn.com/events/moviecard/${event.EventCode}.jpg`}
					alt="Event Thumbnail"
					onClick={this.cardClickHandler}
				/>
				{this.state.isExpanded && <CardExpandedView event={event} />}
			</div>
		);
	}
}

Card.propTypes = {
	event: PropTypes.object
};

export default Card;
