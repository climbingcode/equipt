class Calendar extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
	  	
	  	var rentals	= this.props.rentals ? this.props.rentals : [];

  		const {calendar} = this.refs;

  		var events = rentals.map(function(rental, i) {
  			return {
  				title: 'rented',
  				start: rental.pickup_date,
  				end: rental.dropoff_date
  			}
  		});

  		$(calendar).fullCalendar('destroy');
			
		$(calendar).fullCalendar({
			events: events
		});

	}

  	componentWillReceiveProps() {
	
  		var rentals	= EquipmentStore.getEquipment() ? EquipmentStore.getEquipment().rentals : [];

  		const {calendar} = this.refs;

  		var events = rentals.map(function(rental, i) {
  			return {
  				title: 'rented',
  				start: rental.pickup_date,
  				end: rental.dropoff_date
  			}
  		});

  		$(calendar).fullCalendar('destroy');
			
		$(calendar).fullCalendar({
			events: events
		});
  		
  	}

  	componentWillUnmount() {
  		const {calendar} = this.refs;
  		$(calendar).fullCalendar('destroy');
  	}

	render() {
		return (
			<div ref="calendar"></div>
		);
	}

}