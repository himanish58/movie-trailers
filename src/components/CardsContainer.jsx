import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

class CardContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	cardClickHandler = () => {
		this.setState({ isExpanded: true });
	};

	render() {
		let { events } = this.props;

		return (
			<div className="card-container">
				{Object.keys(events).map((eventId) => {
					return <Card key={eventId} event={events[eventId]} cardClickHandler={this.cardClickHandler} />;
				})}
			</div>
		);
	}
}

CardContainer.propTypes = {
	events: PropTypes.object
};

export default CardContainer;
