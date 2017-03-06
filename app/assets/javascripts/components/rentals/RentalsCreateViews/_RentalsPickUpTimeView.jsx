Equipt.views.RentalsPickUpTimeView = class RentalsPickUpTimeView extends React.Component {

	static propType = {
		unavailableTimes: React.PropTypes.array.isRequired,
		times: React.PropTypes.object.isRequired,
		selectedTime: React.PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);
	}

	render() {

		return(
			<ul className="rental-pickup-times-wrapper">
				{
					[...Array(24)].map((value, index) => {
						
						let klass = '';
						let time  = (index+1);

						return <li  className={ this.getClassName.call(this, time) }
								  	key={`${time.toFixed(2)}_selected`}
								  	onClick={ this.props.selectTime.bind(this, time) }>
								  	{ time.toFixed(2) }
								</li>;
						
					})
				}
			</ul>
		)

	}

	getClassName(time) {

		let availabilities = this.props.availabilities || [];
		let selectedTime   = this.props.selectedTime;

		if (availabilities.indexOf(time) > 1) {
			return 'col-sm-1 unavailable';
		} else if (selectedTime === time) {
			return 'col-sm-1 selected';
		} else {
			return 'col-sm-1';
		}

	}

}