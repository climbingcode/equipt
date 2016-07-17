class EquipmentAvailabilityView extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		var rentals = this.props.equipment.rentals;

		return (
			<div className="equipment-availability-container">
				<Calendar rentals={rentals}/>				
			</div>
		)
	}
}