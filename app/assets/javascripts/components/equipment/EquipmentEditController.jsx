Equipt.controllers.EquipmentEditController = class EquipmentEditController extends Equipt.controllers.MainController {

	static contextTypes = {
		router: React.PropTypes.func.isRequired
	}

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

	componentWillMount() {
		let equipmentId = this.context.router.getCurrentParams().id;
		Equipt.actions.showEquipment(equipmentId);
	}

	updateEquipment(equipment, id) {
		Equipt.actions.updateEquiptment(equipment, id, () => {		
			this.context.router.transitionTo('ownersIndex', {
				userId: this.props.currentUser.id
			});
		});
	}

	updateValue(childComponent, name, value) {
		this.state.equipment[name] = value;
		this.forceUpdate();
	}

	dataChanged() {
		let equipmentId = this.context.router.getCurrentParams().id;
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