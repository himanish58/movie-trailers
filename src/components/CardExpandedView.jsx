import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardExpandedView extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let trailerUrl = this.props.event.TrailerURL;
		trailerUrl = trailerUrl.replace('watch?v=', 'embed/');
		return (
			<div className="expand-view">
				<iframe title="Trailer" width="420" height="315" src={trailerUrl} />
				{/* <video src={this.props.event.TrailerURL} /> */}
			</div>
		);
	}
}

CardExpandedView.propTypes = {
	event: PropTypes.object
};

export default CardExpandedView;
