import { MainController } from 'MainController';

class EquipmentEditController extends MainController {

	getState = function() {
		return {
			errors: Equipt.stores.ErrorsStore.getErrors(),
			currentUser: Equipt.stores.AuthStore.currentUser(),
			equipment: Equipt.stores.EquipmentStore.getEquipment()			
		}
	}

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.ErrorsStore] 
		this.state  = this.getState();
	}

	componentDidMount() {
		let equipmentId = this.context.router.getCurrentParams().id;
		Equipt.actions.showEquipment(equipmentId);
	}

	updateEquipment(equipment, images, id) {
		Equipt.actions.updateEquiptment(equipment, images, id, () => {
			this.context.router.transitionTo('ownersIndex', {
				userId: id
			});
		});
	}

	updateValue(childComponent, name, value) {
		this.state.equipment[name] = value;
		this.forceUpdate();
	}

	dataChanged() {
		return this.getState();
	}

	render() {

		let EquipmentCreateView = Equipt.views.EquipmentCreateView;

		return (
			<EquipmentCreateView 	{ ...this.state } 
									submittedForm={ this.updateEquipment.bind(this) }
									updateValue={ this.updateValue.bind(this) } />
		)
		
	}

}

export { EquipmentEditController };