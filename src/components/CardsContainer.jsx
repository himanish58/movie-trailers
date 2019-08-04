import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

class CardContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expandedCardId: ''
		};
	}

	cardClickHandler = (id) => {
		this.setState({ expandedCardId: id });
	};

	render() {
		let { events } = this.props;

		return (
			<div className="card-container">
				{Object.keys(events).map((eventId) => {
					return (
						<Card
							key={eventId}
							event={events[eventId]}
							cardClickHandler={this.cardClickHandler}
							isExpanded={this.state.expandedCardId === eventId}
						/>
					);
				})}
			</div>
		);
	}
}

CardContainer.propTypes = {
	events: PropTypes.object
};

export default CardContainer;
