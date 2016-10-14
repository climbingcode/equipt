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

		const RentalsCreateController = Equipt.controllers.RentalsCreateController;
		
		let equipment = this.props.equipment;

		return (
			<div className="equipment-availability-container">
				<RentalsCreateController equipment={equipment}/>
			</div>
		)
	}

}