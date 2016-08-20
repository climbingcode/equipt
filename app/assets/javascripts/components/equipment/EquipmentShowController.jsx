Equipt.controllers.EquipmentShowController = class extends Equipt.controllers.MainController {

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

	componentWillMount() {
		let id = this.context.router.getCurrentParams().id;
		Equipt.actions.showEquipment(id);
	}

  	dataChanged() {

  		if (Equipt.stores.RentalStore.getRental()) {
		    this.context.router.transitionTo('equipmentConfirmation', {
		    	id: Equipt.stores.RentalStore.getRental().id
		    });
    	}
  		
  		return {
  			equipment: 	 Equipt.stores.EquipmentStore.getEquipment(),
  			rentalDates: Equipt.stores.RentalStore.getRentalDates(),
  			rentalTime:  Equipt.stores.RentalStore.getRentalTime(),
  			rental: 	 Equipt.stores.RentalStore.getRental(),
  			errors: 	 Equipt.stores.ErrorsStore.getErrors()
  		}

  	}

	render() {

		let EquipmentShowView = Equipt.views.EquipmentShowView; 

		return (
			<EquipmentShowView  { ...this.props }/>
		)
	}

}

Equipt.controllers.EquipmentShowController.contextTypes = {
	router: React.PropTypes.func.isRequired
};