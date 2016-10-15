Equipt.controllers.OwnersIndexController = class extends Equipt.controllers.MainController {

	getState = function() {
		return {
			equipment: Equipt.stores.EquipmentStore.getEquipments()
		}
	}

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.EquipmentStore];
		this.state = this.getState();
		this.protected = true;
	}

	componentDidMount() {
		Equipt.actions.getOwnersEquipment();
	}

	dataChanged() {
		return this.getState();
	}

	render() {

		const OwnersIndexView = Equipt.views.OwnersIndexView;

		return (
			<OwnersIndexView equipment={this.state.equipment}/>
		)
	}

}
