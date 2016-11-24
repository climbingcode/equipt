Equipt.controllers.RentalsIndexController = class RentalsIndexController extends Equipt.controllers.MainController {

	getState = function() {
		return {
			rentals: Equipt.stores.RentalStore.getRentals(),
		}
	}

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.RentalStore];
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
			<RentalIndexView rentals={ this.state.rentals }/>
		)
	}

}