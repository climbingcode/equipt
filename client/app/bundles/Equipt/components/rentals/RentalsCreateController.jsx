Equipt.controllers.RentalsCreateController = class RentalsCreateController extends Equipt.controllers.MainController {

	getState = function() {
		return {
			rentals: Equipt.stores.RentalStore.getRentals(),
			rental: Equipt.stores.RentalStore.getRental(),
			hasCreatedRental: Equipt.stores.RentalStore.hasCreatedRental(),	
			equipment: Equipt.stores.EquipmentStore.getEquipment()
		}
	}

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.RentalStore];
		this.state = this.getState();
	}

	dataChanged() {
		return this.getState();
	}

	shouldComponentUpdate() {
		return Object.keys(this.state.equipment).length > 0;
	}

	selectDates(dates) {
		Equipt.actions.selectedRentalDates(dates);	
	}

	selectTime(time) {
		Equipt.actions.selectedPickUpTime(time);
	}

	rent() {

		let equipmentId   = this.state.equipment.id;
		let rental 		  = this.state.rental;

    	Equipt.actions.rentEquipment(equipmentId, {
    		pickup_date: rental.pickup_date,
    		dropoff_date: rental.dropoff_date,
    		pick_up_time: rental.times,
    		agreed_to_terms: rental.agreed_to_terms
    	});
    	
	}

	render() {

		const RentalsCreateView = Equipt.views.RentalsCreateView;

		console.log( this.props.equipment.rentals );

		return (
			<RentalsCreateView 	equipment={ this.props.equipment }
								rentals={ this.props.equipment.rentals || [] }
								rental={ this.state.rental }
								hasCreatedRental={ this.state.hasCreatedRental }
								agreedToTerms={ this.state.agreedToTerms }
								owner={ this.state.equipment.owner || {} }
								selectDates={ this.selectDates }
								selectTime={ this.selectTime }
								rent={ this.rent.bind(this) }
			/>
		)

	}

}	