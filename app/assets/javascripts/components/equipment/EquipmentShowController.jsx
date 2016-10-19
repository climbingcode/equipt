Equipt.controllers.EquipmentShowController = class extends Equipt.controllers.MainController {

	static contextTypes = {
		router: React.PropTypes.func.isRequired
	}

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