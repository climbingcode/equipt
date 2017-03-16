import { RouteHandler } from 'react-router';
import { MainController } from 'MainController';

class EquiptmentShowController extends MainController {

	getState = function() {
		return {
  			equipment: Equipt.stores.EquipmentStore.getEquipment()
  		}
	}

	constructor(props) {
		super(props);
		this.stores = [ Equipt.stores.EquipmentStore ];
		this.state = this.getState();
	}

	shouldComponentUpdate() {
		return Object.keys(this.state.equipment).length > 0;
	}

	componentDidMount() {
		let id = this.context.router.getCurrentParams().id;
		Equipt.actions.showEquipment(id);
	}

  	dataChanged() {
  		return this.getState();
  	}

	render() {

		let EquipmentShowView = Equipt.views.EquipmentShowView;

		return (
			<EquipmentShowView  { ...this.state } />
		)
	}

}

export { EquiptmentShowController };