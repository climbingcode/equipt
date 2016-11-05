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

	selectedDates(dates) {
		setTimeout(() => {
			Equipt.actions.selectedRentalDates(dates);
		}, 50);
	}

	selectedTime(time) {
		Equipt.actions.selectedPickUpTime(time);
	}

	render() {

		const RentalsCreateView = Equipt.views.RentalsCreateView;

		return (
			<RentalsCreateView 	equipment={ this.state.equipment }
								rentals={ this.state.rentals }
								rental={ this.state.rental }
								hasCreatedRental={ this.state.hasCreatedRental }
								owner={ this.state.equipment.owner || {} }
								selectedDates={ this.selectedDates }
								selectedTime={ this.selectedTime }
			/>
		)

	}

}	