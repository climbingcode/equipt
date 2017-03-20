import React from 'react';
import Constants from 'Constants';

export class RentalsPickUpTimeView extends React.Component {

	static propType = {
		unavailableTimes: React.PropTypes.array.isRequired,
		times: React.PropTypes.object.isRequired,
		selectedTime: React.PropTypes.func.isRequired
	}

	styles = {
		ul: {
			padding: 0,
			marginBottom: '10px'
		},
		li: {
			listStyle: 'none',
			borderColor: '#000',
			borderWidth: 1,
			padding: 0,
			marginTop: 5,
			marginRight: 5,
			marginLeft: 5,
			textAlign: 'center',
			background: '#fff'
		},
		selected: {
			background: Constants.styles.primary,
			color: '#fff'
		},
		unavailable: {
			background: Constants.styles.secondary,
			color: '#fff'
		}
	}

	constructor(props) {
		super(props);
	}

	render() {

		return(
			<ul style={ this.styles.ul }>
				{
					[...Array(24)].map((value, index) => {
						
						let klass = '';
						let time  = (index+1);

						let availabilities = this.props.availabilities || [];
						let selectedTime   = this.props.selectedTime;

						let selectedStyles = selectedTime === time ? this.styles.selected : {};
						let unavailableStyles = availabilities.indexOf(time) > 1 ? this.styles.unavailable : {};

						return <li  className="col-sm-1"
									style={ { ...this.styles.li, ...selectedStyles, ...unavailableStyles } }
								  	key={`${time.toFixed(2)}_selected`}
								  	onClick={ this.props.selectTime.bind(this, time) }>
								  	{ time.toFixed(2) }
								</li>;
						
					})
				}
			</ul>
		)

	}	

}