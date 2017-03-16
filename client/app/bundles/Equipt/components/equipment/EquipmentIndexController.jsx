import { MainController } from 'MainController';
import { RouteHandler } from 'react-router';

class EquipmentIndexController extends MainController {

	getState = function() {
		return {
			equipment: Equipt.stores.EquipmentStore.getEquipments(),
			pages: Equipt.stores.EquipmentStore.getPages(),
			search: Equipt.stores.EquipmentStore.getSearchQuery(),
			showLoader: Equipt.stores.EquipmentStore.showLoader()
		}
	}

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.EquipmentStore];
		this.state  = this.getState();
	}

	componentDidMount() {
		Equipt.actions.getEquipment(this.state.search);
	}


	willTransitionTo(transition) {
		if (!Equipt.stores.AuthStore.authenticated()) {
			transition.redirect('/home');	
		}
	}

  	dataChanged() {
  		return this.getState();
  	}

	render() {

		const EquipmentIndexView   = Equipt.views.EquipmentIndexView;

		return (
			<div className="equiptment-wrapper">
				<EquipmentIndexView { ...this.state } />
			</div>
		)
	}

}

export { EquipmentIndexController };