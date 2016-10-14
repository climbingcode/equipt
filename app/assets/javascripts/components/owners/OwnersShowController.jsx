Equipt.controllers.OwnersShowController = class OwnersShowController extends Equipt.controllers.MainController {

	static contextTypes = {
		router: React.PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);
		this.stores = 	[	
							Equipt.stores.EquipmentStore, 
							Equipt.stores.RentalStore, 
							Equipt.stores.ErrorsStore
						];
		this.state = {
			equipment: 	 Equipt.stores.EquipmentStore.getEquipment(),
  			rentalDates: Equipt.stores.RentalStore.getRentalDates(),
  			rentalTime:  Equipt.stores.RentalStore.getRentalTime(),
  			rental: 	 Equipt.stores.RentalStore.getRental(),
  			errors: 	 Equipt.stores.ErrorsStore.getErrors()
		}
	}

	dataChanged() {

  		return {
  			equipment: 	 Equipt.stores.EquipmentStore.getEquipment(),
  			rentalDates: Equipt.stores.RentalStore.getRentalDates(),
  			rentalTime:  Equipt.stores.RentalStore.getRentalTime(),
  			rental: 	 Equipt.stores.RentalStore.getRental(),
  			errors: 	 Equipt.stores.ErrorsStore.getErrors()
  		}

  	}

	componentDidMount() {
		let id = this.context.router.getCurrentParams().equipmentId;
		Equipt.actions.showEquipment(id);
	}

	render() {

		const OwnersShowView = Equipt.views.OwnersShowView;
		const userId = Equipt.stores.AuthStore.getUserId();

		return (
			<OwnersShowView userId={userId} { ...this.state }/>
		)

	}

}