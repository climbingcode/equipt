Equipt.controllers.EquipmentShowController = class EquipmentShowController extends Equipt.controllers.MainController {

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
		showEquipment(id);
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
			<EquipmentShowView  equipment={this.state.equipment}
								rentalDates={this.state.rentalDates}
								rentalTimes={this.state.rentalTime}
								rental={this.state.rental}
								errors={this.state.errors}
			/>
		)
	}

}

Equipt.controllers.EquipmentShowController.contextTypes = {
	router: React.PropTypes.func.isRequired
};