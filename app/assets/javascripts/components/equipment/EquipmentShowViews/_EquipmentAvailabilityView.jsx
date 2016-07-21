class EquipmentAvailabilityView extends React.Component {

	constructor(props) {
		super(props);
	}

	selectedDates(start, end) {
		selectedRentalDates(start, end);
	}

	render() {
		const rentals = this.props.equipment.rentals;
		return (
			<div className="equipment-availability-container">
				<Calendar selectedDates={this.selectedDates.bind(this)} 
						  rentals={rentals}
						  dates={this.props.rentalDates}
				/>
			</div>
		)
	}

}