Equipt.controllers.RentalIndexView = class RentalIndexView extends React.Component {

	cancel(equipmentId, rentalId) {
		Equipt.actions.deleteRental(equipmentId, rentalId);
	}

	render() {

		let rentals = this.props.rentals || [];

		let renterOrOwner = this.props.title === 'Rentals' ? 'Renter' : 'Owner';

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
	    					<th>Cancel</th>
	 				</tr>
	 				</thead>
	 				<tbody>
		 				{
		 					rentals.map((rental, index) => {
		 						return 	(<tr key={`${ this.props.title }_index_${ index }`}>
	    									<td>{rental.equipment.equipment_name}</td>
	    									<td>{rental.pickup_date}</td> 
	    									<td>{rental.dropoff_date}</td>
	    									<td>{rental.equipment.owner.firstname}</td>
	    									<td>{rental.equipment.owner.email}</td>
	    									<td>
	    										<input  type="checkbox"
	    												onChange={ this.cancel.bind(this, rental.equipment.id, rental.id) }/>
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