Equipt.controllers.EquipmentIndexController = class extends Equipt.controllers.MainController {

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.EquipmentStore];
		this.state  = {
			equipments: Equipt.stores.EquipmentStore.getEquipments()
		}
	}

	componentWillMount() {
		Equipt.actions.getEquipment();
	}

  	dataChanged() {
  		return {
  			equipments: Equipt.stores.EquipmentStore.getEquipments()
  		};
  	}

	render() {

		let EquipmentIndexView = Equipt.views.EquipmentIndexView;

		return (
			<div className="equiptment-wrapper">
				<RouteHandler/>
				<EquipmentIndexView equipments={this.state.equipments}/>
			</div>
		)
	}

}