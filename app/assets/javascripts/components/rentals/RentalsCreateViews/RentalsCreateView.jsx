Equipt.views.RentalsCreateView = class RentalsCreateView extends React.Component {

	static contextTypes = {
		router: React.PropTypes.func.isRequired
	}

	static propType = {
		equipment: React.PropTypes.object.required,
		rentals: React.PropTypes.array.required,
		rental: React.PropTypes.object.required,
		hasCreatedRental: React.PropTypes.bool.required,
		owner: React.PropTypes.object.required
	}

	rent() {

		let equipmentId = this.props.equipment.id;
		let rental 		= this.props.rental;

    	Equipt.actions.rentEquipment(equipmentId, {
    		pickup_date: rental.pickup_date,
    		dropoff_date: rental.dropoff_date,
    		pick_up_time: rental.times
    	});
    	
	}

	render() {

		const Calendar 				  = Equipt.views.Calendar;
		const RentalsPickUpTimeView   = Equipt.views.RentalsPickUpTimeView;
		const RentalsConfirmationView = Equipt.views.RentalsConfirmationView;

		if (this.props.hasCreatedRental) {
			return (
				<RentalsConfirmationView 	equipment={ this.props.equipment }
											rental={ this.props.rental }
											owner={ this.props.owner }
				/>
			)
		}

		return (
			<div className="rentals-create-container">
				<Calendar 	selectedDates={ this.props.selectedDates }
							rentals={ this.props.rentals }
							rental={ this.props.rental } />
				<h4>Pick Up Time</h4>
				<RentalsPickUpTimeView 	selectedTime={ this.props.selectedTime }
										availability={ this.props.owner.availability || [] } 
										times={ [ this.props.rental.times ] }
				/>
				<div className="clearfix"></div>
				<button className="btn btn-success col-sm-12" 
						disabled={ this.props.rental.pickup_date ? false : true }
						onClick={this.rent.bind(this)}>
						Rent
				</button>
			</div>
		)
	}

}