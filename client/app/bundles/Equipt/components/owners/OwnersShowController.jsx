Equipt.controllers.OwnersShowController = class OwnersShowController extends Equipt.controllers.MainController {

	static contextTypes = {
		router: React.PropTypes.func.isRequired
	}

	getState = function() {
		return {
  			equipment: 	 Equipt.stores.EquipmentStore.getEquipment(),
  			rental: 	 Equipt.stores.RentalStore.getRental()
  		}
	}

	constructor(props) {
		super(props);
		this.stores = 	[	
							Equipt.stores.EquipmentStore, 
							Equipt.stores.RentalStore, 
							Equipt.stores.ErrorsStore 
						];
		this.state = this.getState();
	}

	dataChanged() {
		return this.getState();
  	}

	componentDidMount() {
		let id = this.context.router.getCurrentParams().equipmentId;
		Equipt.actions.showEquipment(id);
	}

	render() {

		const OwnersShowView = Equipt.views.OwnersShowView;
		const userId = Equipt.stores.AuthStore.getUserId();

		return (
			<OwnersShowView userId={userId} { ...this.state }/>
		)

	}

}