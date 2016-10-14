Equipt.views.RentalsConfirmationView = class RentalsConfirmationView extends React.Component {

	static propType = {
		equipment: React.PropTypes.object.isRequired,
		rental: React.PropTypes.object.isRequired,
		owner: React.PropTypes.object.isRequired
	}

	constructor(props) {
		super(props);
	}

	componentWillUnmount() {
		Equipt.stores.RentalStore.clearRental();
	}

	render() {

		const GoogleMapView = Equipt.views.mapView;

		let equipment = this.props.equipment;
		let rental 	  = this.props.rental;
		let owner 	  = this.props.owner;

		var ownerLocation = "";

		if (owner.lat && owner.lng) {

			ownerLocation =	<div className="owner-location">
								<GoogleMapView  position={{
									lat: owner.lat,
									lng: owner.lng
								}}/>
							</div>

		}

		return (<div className="rental-confirmation">
					<div className="col-sm-6">
						<h2>{ equipment.equipment_name }</h2>
						<br/>
						<h5>Pick Up Time: { rental.pickup_date }</h5>
						<h5>Drop Off Time: { rental.dropoff_date }</h5>
						<br/>
						<h3>Total</h3>
						<h5>{ rental.total_rental_days }days * ${ equipment.price_per_day } = ${ rental.sub_total }</h5>
						<h5>Deposit: ${ rental.rental_deposit }</h5>
						<h4>Total Rental Cost: ${ rental.rental_total }</h4>
					</div>
					{ownerLocation}
				</div>)
	}

}