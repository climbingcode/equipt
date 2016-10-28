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

		let times = this.props.times || [];

		return(
			<ul className="rental-pickup-times-wrapper">
				{
					[...Array(24)].map((value, index) => {
		
						let time = (index+1).toFixed(2);
						let klass = times.indexOf(time) > -1 ? 'col-sm-1 selected' : 'col-sm-1';
						return <li  className={klass}
								  	key={`${time}_selected`}
								  	onClick={ this.props.selectedTime.bind(this, time) }>
								  	{time}
								</li>;
						
					})
				}
			</ul>
		)

	}

}