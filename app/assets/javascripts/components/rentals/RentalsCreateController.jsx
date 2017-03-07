Equipt.controllers.RentalsCreateController = class RentalsCreateController extends Equipt.controllers.MainController {

	getState = function() {
		return {
			rentals: Equipt.stores.RentalStore.getRentals(),
			rental: Equipt.stores.RentalStore.getRental(),
			hasCreatedRental: Equipt.stores.RentalStore.hasCreatedRental(),	
			equipment: Equipt.stores.EquipmentStore.getEquipment(),
			agreedToTerms: false
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
		setTimeout(() => {
			Equipt.actions.selectedRentalDates(dates);
		}, 50);
	}

	selectTime(time) {
		Equipt.actions.selectedPickUpTime(time);
	}

	agreedToTermsChanged() {
		this.state.agreedToTerms = this.state.agreedToTerms ? false : true;
		this.setState(this.state);
	}

	rent() {

		let equipmentId = this.state.equipment.id;
		let rental 		= this.state.rental;
		let agreedToTerms = this.state.agreedToTerms;

    	Equipt.actions.rentEquipment(equipmentId, {
    		pickup_date: rental.pickup_date,
    		dropoff_date: rental.dropoff_date,
    		pick_up_time: rental.times,
    		agreed_to_terms: this.state.agreedToTerms
    	});
    	
	}

	render() {

		const RentalsCreateView = Equipt.views.RentalsCreateView;

		return (
			<RentalsCreateView 	equipment={ this.state.equipment }
								rentals={ this.state.rentals }
								rental={ this.state.rental }
								hasCreatedRental={ this.state.hasCreatedRental }
								agreedToTerms={ this.state.agreedToTerms }
								owner={ this.state.equipment.owner || {} }
								selectDates={ this.selectDates }
								selectTime={ this.selectTime }
								rent={ this.rent.bind(this) }
								agreedToTermsChanged={ this.agreedToTermsChanged.bind(this) } 
			/>
		)

	}

}	