Equipt.views.EquipmentAvailabilityView = class EquipmentAvailabilityView extends React.Component {

	constructor(props) {
		super(props);
	}

	selectedDates(start, end) {
		Equipt.actions.selectedRentalDates(start, end);
	}

	pickUpTimeSelected(time) {
		Equipt.actions.selectedPickUpTime(time);
	}

	render() {

		const equipment  = this.props.equipment;
		const rentals 	 = equipment ? equipment.rentals : null;
		const rentalTime = Equipt.stores.RentalStore.getRentalTime()
		let pickUpTimes  = [];

		for (let i = 0; i <= 24; i++) {
			let time = i.toFixed(2);
			let klass = time == rentalTime ? 'col-sm-1 selected' : 'col-sm-1';
			pickUpTimes.push(<div className={klass}
								  key={`${time}_selected`}
								  onClick={this.pickUpTimeSelected.bind(this, time)}>{time}</div>);
		}

		return (
			<div className="equipment-availability-container">
				<Calendar selectedDates={this.selectedDates.bind(this)} 
						  rentals={rentals}
						  rentalDates={this.props.rentalDates}
				/>
				<h4>Pick Up Time</h4>
				<div className="pick-up-time-container">{pickUpTimes}</div>
			</div>
		)
	}

}