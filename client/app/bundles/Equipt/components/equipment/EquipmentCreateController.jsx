import { RouteHandler } from 'react-router';
import { MainController } from 'MainController';

class EquipmentCreateController extends MainController {

	getState = function() {
		return {
			errors: Equipt.stores.ErrorsStore.getErrors(),
			currentUser: Equipt.stores.AuthStore.currentUser()		
		}
	}

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.ErrorsStore]
		this.state = this.getState();
	}

	createEquipment(equipment, images) {
		Equipt.actions.createEquiptment(equipment, images, () => {
			this.context.router.transitionTo('ownersIndex', {
				userId: this.props.currentUser.id
			});
		});
	}

	dataChanged() {
		return this.getState();
	}

	render() {

		let EquipmentCreateView = Equipt.views.EquipmentCreateView;

		let userId = Equipt.stores.AuthStore.getUserId();

		return (
			<EquipmentCreateView userId={userId} 
								 errors={this.state.errors}
								 submittedForm={this.createEquipment.bind(this)}/>
		)
		
	}

}

export { EquipmentCreateController };