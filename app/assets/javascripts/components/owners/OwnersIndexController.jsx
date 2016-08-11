class OwnersIndexController extends Equipt.controllers.MainController {

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.EquipmentStore];
		this.state = this.dataChanged();
	}

	componentWillMount() {
		getOwnersEquipment();
	}

	dataChanged() {
		return {
			equipment: EquipmentStore.getEquipment()
		}
	}

	render() {
		return (
			<OwnersIndexView equipment={this.state.equipment}/>
		)
	}

}
