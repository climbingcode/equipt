Equipt.controllers.RentalIndexView = class RentalIndexView extends React.Component {

	shouldComponentUpdate(props) {
		return !!props.rentals.length;
	}

	cancel(equipmentId, rentalId) {
		Equipt.actions.deleteRental(equipmentId, rentalId);
	}

	render() {

		let rentals = this.props.rentals || [];

		return (
			<div className="rentals-index">
				<h3>Rentals</h3>
				<Link to="equipmentIndex">Back to Equipment Index</Link>
				<table className="table table-striped">
					<thead>
						<tr>
	   						<th>Equipment Name</th>
	    					<th>Pickup date</th> 
	    					<th>Dropoff Date</th>
	    					<th>Renter</th>
	    					<th>Renter Email</th>
	    					<th>Cancel</th>
	 				</tr>
	 				</thead>
	 				<tbody>
		 				{
		 					rentals.map((rental, index) => {
		 						return 	(<tr key='rental_index_${ index }'>
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