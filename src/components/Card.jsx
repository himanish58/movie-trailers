import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let { event } = this.props;

		return (
			<div className="card">
				<img
					key={event.EventCode}
					src={`https://in.bmscdn.com/events/moviecard/${event.EventCode}.jpg`}
					alt="Event Thumbnail"
				/>
			</div>
		);
	}
}

Card.propTypes = {
	event: PropTypes.object
};

export default Card;
