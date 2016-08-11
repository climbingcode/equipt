class EquipmentConfirmation extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillUnmount() {
		RentalStore.clearRental();
	}

	render() {

		let rental  = this.props.rental
		let rentalConfirmation = null;

		if (rental) {

			let lat = rental.equipment.user.lat;
			let lng = rental.equipment.user.lng;

			var map = <Map lat={lat} lng={lng}/>

			rentalConfirmation = 	<div className="rental-confirmation">
										<div className="col-sm-6">
											<h2>{ rental.equipment.equipment_name }</h2>
											<br/>
											<h5>Pick Up Time: { rental.pickup_date }</h5>
											<h5>Drop Off Time: { rental.dropoff_date }</h5>
											<br/>
											<h3>Total</h3>
											<h5>{ rental.total_rental_days }days * ${ rental.equipment.price_per_day } = ${ rental.sub_total }</h5>
											<h5>Deposit: ${ rental.rental_deposit }</h5>
											<h4>Total Rental Cost: ${ rental.rental_total }</h4>
										</div>
										<div className="owner-location">
											{map}
										</div>
									</div>

		}

		return (rentalConfirmation)
	}

}