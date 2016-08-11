class EquipmentShowController extends MainComponent {

	constructor(props) {
		super(props);
		this.stores = [EquipmentStore, RentalStore, ErrorsStore];
		this.state = {
			equipment: 	 EquipmentStore.getEquipment(),
  			rentalDates: RentalStore.getRentalDates(),
  			rentalTime:  RentalStore.getRentalTime(),
  			rental: 	 RentalStore.getRental(),
  			errors: 	 ErrorsStore.getErrors()
		}
	}

	componentWillMount() {
		let id = this.context.router.getCurrentParams().id;
		showEquipment(id);
	}

  	dataChanged() {

  		if (RentalStore.getRental()) {
		    this.context.router.transitionTo('equipmentConfirmation', {
		    	id: RentalStore.getRental().id
		    });
    	}
  		
  		return {
  			equipment: 	 EquipmentStore.getEquipment(),
  			rentalDates: RentalStore.getRentalDates(),
  			rentalTime:  RentalStore.getRentalTime(),
  			rental: 	 RentalStore.getRental(),
  			errors: 	 ErrorsStore.getErrors()
  		}

  	}

	render() {
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

EquipmentShowController.contextTypes = {
	router: React.PropTypes.func.isRequired
};