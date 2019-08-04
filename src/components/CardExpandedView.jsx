import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Chip from '@material-ui/core/Chip';
import ThumbsUp from '@material-ui/icons/ThumbUpSharp';
import ThumbsDown from '@material-ui/icons/ThumbDownSharp';
import ReleaseDateIcon from '@material-ui/icons/DateRange';
import ThumbsUpDown from '@material-ui/icons/ThumbsUpDownSharp';

class CardExpandedView extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.styles = {
			chip: {
				background: 'transparent',
				border: '1px solid #C0C0C0',
				marginRight: '0.5rem',
				color: '#C0C0C0',
				fontSize: '0.75rem'
			},
			icons: {
				marginRight: '0.75rem',
				fontSize: '2rem',
				color: '#ffffff'
			},
			thumbsUp: {
				fontSize: '2rem',
				color: 'green',
				border: '1px solid green',
				padding: '0.75rem',
				borderRadius: '50%'
			},
			help: {
				fontSize: '2rem',
				color: 'yellow',
				border: '1px solid yellow',
				padding: '0.75rem',
				borderRadius: '50%'
			},
			thumbsDown: {
				fontSize: '2rem',
				color: 'red',
				border: '1px solid red',
				padding: '0.75rem',
				borderRadius: '50%'
			}
		};
	}

	render() {
		let { event } = this.props;
		let genres = event.EventGenre.split('|');
		let { ShowDate } = event;
		ShowDate = ShowDate.split(',');
		let trailerUrl = event.TrailerURL;
		trailerUrl = trailerUrl.replace('watch?v=', 'embed/');
		trailerUrl = trailerUrl.replace('&feature=youtu.be', '');

		return (
			<div className="expand-view">
				<div className="video">
					<iframe title="Trailer" src={trailerUrl} />
				</div>
				<div className="expanded-desc">
					<div className="title">{event.EventTitle || event.EventName}</div>
					<div className="lang">{event.EventLanguage}</div>
					<div className="genre">
						{genres.map((genre, index) => {
							return <Chip style={this.styles.chip} label={genre} key={index} />;
						})}
					</div>
					<div className="vote-and-date">
						<div className="vote">
							<ThumbsUp style={this.styles.icons} />
							<div className="text-block">
								<div className="first-line">{event.wtsPerc + '%'}</div>
								<div className="second-line">{event.wtsCount + ' votes'}</div>
							</div>
						</div>
						<div className="date">
							<ReleaseDateIcon style={this.styles.icons} />
							<div className="text-block">
								<div className="first-line">{ShowDate[0]}</div>
								<div className="second-line">{ShowDate[1]}</div>
							</div>
						</div>
					</div>
					<div className="watch">
						<div className="will">
							<ThumbsUp style={this.styles.thumbsUp} />
							<div className="will-text">
								<div>Will Watch</div>
								<div />({event.ratings.wtsCount})
							</div>
						</div>
						<div className="maybe">
							<ThumbsUpDown style={this.styles.help} />
							<div className="will-text">
								<div>Maybe</div>
								<div />({event.ratings.wtsCount})
							</div>
						</div>
						<div className="wont">
							<ThumbsDown style={this.styles.thumbsDown} />
							<div className="will-text">
								<div>Won't Watch</div>
								<div />({event.ratings.dwtsCount})
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

CardExpandedView.propTypes = {
	event: PropTypes.object
};

export default CardExpandedView;
