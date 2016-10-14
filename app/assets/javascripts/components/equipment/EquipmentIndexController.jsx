Equipt.controllers.EquipmentIndexController = class extends Equipt.controllers.MainController {

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.EquipmentStore];
		this.state  = {
			equipment: Equipt.stores.EquipmentStore.getEquipments()
		}
	}

	willTransitionTo(transition) {
		if (!Equipt.stores.AuthStore.authenticated()) {
			transition.redirect('/home');	
		} 
	}

	componentDidMount() {
		Equipt.actions.getEquipment();
	}

  	dataChanged() {
  		return {
  			equipment: Equipt.stores.EquipmentStore.getEquipments()
  		};
  	}

	render() {

		let EquipmentIndexView = Equipt.views.EquipmentIndexView;

		return (
			<div className="equiptment-wrapper">
				<EquipmentIndexView { ...this.state } />
			</div>
		)
	}

}