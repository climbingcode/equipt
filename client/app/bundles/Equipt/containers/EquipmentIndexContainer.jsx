import { MainController } from 'MainController';
import { RouteHandler } from 'react-router';

import EquipmentStore from 'stores/EquipmentStore';

export class EquipmentIndexContainer extends MainController {

	getState = function() {
		return {
			equipment: EquipmentStore.getEquipments(),
			pages: EquipmentStore.getPages(),
			search: EquipmentStore.getSearchQuery(),
			showLoader: EquipmentStore.showLoader()
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

};