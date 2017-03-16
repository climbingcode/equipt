import { MainController } from 'MainController';

class OwnersIndexController extends MainController {

	getState = function() {
		return {
			equipments: Equipt.stores.OwnerStore.getEquipments()
		}
	}

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.EquipmentStore];
		this.state = this.getState();
	}

	componentDidMount() {
		Equipt.actions.getOwnersEquipment();
	}

	dataChanged() {
		return this.getState();
	}

	render() {

		const OwnersIndexView = Equipt.views.OwnersIndexView;

		let equipments = this.state.equipments || [];

		return (
			<OwnersIndexView equipment={ equipments }/>
		)
	}

}

export { OwnersIndexController };
