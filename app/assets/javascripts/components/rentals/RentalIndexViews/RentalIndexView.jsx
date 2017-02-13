Equipt.controllers.RentalIndexView = class RentalIndexView extends React.Component {

	cancel(equipmentId, rentalId) {
			Equipt.actions.deleteRental(equipmentId, rentalId, this.props.canConfirm);
	}

	confirm(equipmentId, rentalId, rental) {
		if (this.props.canConfirm) {
			rental.rental_confirmed ? rental.rental_confirmed = false : rental.rental_confirmed = true; 
			Equipt.actions.confirmRental(equipmentId, rentalId, rental);
		}
	}

	confirmCheckBox(rental) {

		if (this.props.canConfirm && rental.rental_confirmed) {
			return <i className="fa fa-check-square" aria-hidden="true"></i>;
		} else if (this.props.canConfirm) {
			return 	<input  type="checkbox"
							checked={ rental.rental_confirmed }
							onChange={ this.confirm.bind(this, rental.equipment.id, rental.id, rental) }/>;
		} else {
		 	return <i className="fa fa-times-circle" aria-hidden="true"></i>;
		}

	}

	render() {

		let rentals = this.props.rentals || [];
		let renterOrOwner = this.props.canConfirm ? 'Renter' : 'Owner';

		return (
			<div className="rentals-index">
				<h3>{ this.props.title }</h3>
				<table className="table table-striped">
					<thead>
						<tr>
	   						<th>Equipment Name</th>
	    					<th>Pickup date</th> 
	    					<th>Dropoff Date</th>
	    					<th>{ renterOrOwner }</th>
	    					<th>{ renterOrOwner } Email</th>
	    					<th>{ renterOrOwner === 'Renter' ?  "Comfirmed" : "Confirm" }</th>
	    					<th>Cancel</th>
	 				</tr>
	 				</thead>
	 				<tbody>
		 				{
		 					rentals.map((rental, index) => {

		 						let userDetails = renterOrOwner === 'Renter' ? rental.renter : rental.equipment.owner;

		 						return 	(<tr key={`${ this.props.title }_index_${ index }`}>
	    									<td>{ rental.equipment.equipment_name }</td>
	    									<td>{ rental.pickup_date }</td> 
	    									<td>{ rental.dropoff_date }</td>
	    									<td>{ userDetails.firstname }</td>
	    									<td>{ userDetails.email }</td>
	    									<td>{ this.confirmCheckBox.call(this, rental) }</td>
	    									<td>
	    										<input  type="checkbox"
	    												onChange={ this.cancel.bind(this, rental.equipment.id, rental.id, rental) }/>
	    									</td>
	  									</tr>);
		 					})
		 				}
	 				</tbody>
				</table>
			</div>
		)
	}
	
}