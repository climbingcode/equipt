Equipt.controllers.EquipmentShowController = class extends Equipt.controllers.MainController {

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
			equipment: {}
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
  			equipment: Equipt.stores.EquipmentStore.getEquipment()
  		}

  	}

	render() {

		let EquipmentShowView = Equipt.views.EquipmentShowView; 

		return (
			<EquipmentShowView  { ...this.state } />
		)
	}

}