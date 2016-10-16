Equipt.views.EquiptmentSearchDate = class EquiptmentSearchDate extends React.Component {

	static propType = {
		search: React.PropTypes.object.isRequired,
		selected: React.PropTypes.func.isRequired
	}

	dateChanged(dates) {
		if (dates.pickup && dates.dropoff) {
			let searchObj   = this.props.search;
			searchObj.dates = dates;
			Equipt.actions.getEquipment(searchObj);
		}
	}

	componentWillReceiveProps() {

		let $pickupDatePicker  = $(this.refs.pickupDatePicker);
		let $dropoffDatePicker = $(this.refs.dropoffDatePicker);
		let dates 			   = this.props.dates;

		// if (dates && dates.pickup) {
		// 	$pickupDatePicker.setDate('setDate', dates.pickup);	
		// } else {
		// 	$pickupDatePicker.setDate('setDate', null);
		// }

		// if (dates && dates.dropoff) {
		// 	$pickupDatePicker.setDate('setDate', dates.dropoff);
		// } else {
		// 	$pickupDatePicker.setDate('setDate', null);
		// }

	}

	componentDidMount() {

		let $pickupDatePicker  = $(this.refs.pickupDatePicker).datetimepicker();
		let $dropoffDatePicker = $(this.refs.dropoffDatePicker).datetimepicker();
		
		$pickupDatePicker.on('dp.change', (pickup) => {
			this.dateChanged({
								pickup: $pickupDatePicker.data('date'),
								dropoff: $dropoffDatePicker.data('date')
							});
		});

		$dropoffDatePicker.on('dp.change', (dropoff) => {
			this.dateChanged({
								pickup: $pickupDatePicker.data('date'),
								dropoff: $dropoffDatePicker.data('date')
							});
		});
		
	}

	render() {
		return (
			<div className="col-xs-4 equipment-date-search-container">

				<div className="form-group equipment-date-input-container">
	                <div className='input-group date' ref='pickupDatePicker'>
	                    <input 	type='text'
	                    		placeholder="pickup date" 
	                    		className="form-control" />
	                    <span className="input-group-addon">
	                        <span className="glyphicon glyphicon-calendar"></span>
	                    </span>
	                </div>
            	</div>

            	<div className="form-group equipment-date-input-container">
	                <div className='input-group date' ref='dropoffDatePicker'>
	                    <input 	type='text' 
	                    		placeholder="dropoff date" 
	                    		className="form-control" />
	                    <span className="input-group-addon">
	                        <span className="glyphicon glyphicon-calendar"></span>
	                    </span>
	                </div>
            	</div>

			</div>
		)
	}

}