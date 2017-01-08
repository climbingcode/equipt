Equipt.controllers.RentalsIndexController = class RentalsIndexController extends Equipt.controllers.MainController {

	getState = function() {
		return {
			rentals: Equipt.stores.RentalStore.getRentals(),
			ownersRentals: Equipt.stores.OwnerStore.getRentals()
		}
	}

	constructor(props) {
		super(props);
		this.stores = [ Equipt.stores.RentalStore, Equipt.stores.OwnerStore ];
		this.state  = this.getState();
	}

	componentDidMount() {
		Equipt.actions.getRentals();
	}

	dataChanged() {
  		return this.getState();
  	}

	render() {

		const RentalIndexView = Equipt.controllers.RentalIndexView;

		return (
			<div>
				<Link to="equipmentIndex">Back to Equipment Index</Link>
				<RentalIndexView rentals={ this.state.ownersRentals } title="Rentals"/>
				<RentalIndexView rentals={ this.state.rentals } title="Rented"/>
			</div>
		)
	}

}