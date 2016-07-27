class EquipmentConfirmation extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let equipment = EquipmentStore.getEquipment() ? EquipmentStore.getEquipment() : {};
		let rental  = RentalStore.getRental() ? RentalStore.getRental() : {};

		return (
			<div className="rental-confirmation">
				<div className="col-sm-6">
					<h2>{ equipment.equipment_name }</h2>
					<br/>
					<h5>Pick Up Time: { rental.pickup_date }</h5>
					<h5>Drop Off Time: { rental.dropoff_date }</h5>
					<br/>
					<h3>Total</h3>
					<h5>${equipment.price_per_day}</h5>
				</div>
			</div>
		)
	}

}