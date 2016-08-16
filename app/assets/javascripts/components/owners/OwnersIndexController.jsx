Equipt.controllers.OwnersIndexController = class extends Equipt.controllers.MainController {

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.EquipmentStore];
		this.state = this.dataChanged();
	}

	componentWillMount() {
		Equipt.actions.getOwnersEquipment();
	}

	dataChanged() {
		return {
			equipment: Equipt.stores.EquipmentStore.getEquipment()
		}
	}

	render() {

		let OwnersIndexView = Equipt.views.OwnersIndexView;

		return (
			<OwnersIndexView equipment={this.state.equipment}/>
		)
	}

}
