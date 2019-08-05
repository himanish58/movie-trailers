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
				color: '#00a341'
			}
		};
	}

	render() {
		const { event, isExpanded } = this.props;
		let { ShowDate } = event;
		ShowDate = ShowDate.split(',');

		return (
			<div
				className="card pointer"
				style={isExpanded ? this.styles.expandedHeight : this.styles.nonExpandedHeight}
			>
				<div className="release-date-wrapper">
					<div
						className="release-date pointer"
						onClick={(e) => {
							this.props.cardClickHandler(event.EventCode);
						}}
					>
						{ShowDate}
					</div>
				</div>
				{!isExpanded && (
					<div
						className="play-icon pointer"
						onClick={(e) => {
							this.props.cardClickHandler(event.EventCode);
						}}
					>
						<PlayIcon style={this.styles.playIcon} />
					</div>
				)}
				<img
					key={event.EventCode}
					className={isExpanded ? 'img-border' : ''}
					src={`https://in.bmscdn.com/events/moviecard/${event.EventCode}.jpg`}
					alt="Event Thumbnail"
					onClick={(e) => {
						this.props.cardClickHandler(event.EventCode);
					}}
				/>
				{isExpanded && <CardExpandedView event={event} />}
			</div>
		);
	}
}

Card.propTypes = {
	event: PropTypes.object,
	cardClickHandler: PropTypes.func,
	isExpanded: PropTypes.bool
};

export default Card;
