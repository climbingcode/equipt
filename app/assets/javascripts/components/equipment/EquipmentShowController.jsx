Equipt.controllers.EquipmentShowController = class extends Equipt.controllers.MainController {

	static contextTypes = {
		router: React.PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);
		this.stores = [ Equipt.stores.EquipmentStore ];

		this.state = {
			equipment: Equipt.stores.EquipmentStore.getEquipment()
		}

	}

	componentDidMount() {
		let id = this.context.router.getCurrentParams().id;
		Equipt.actions.showEquipment(id);
	}

  	dataChanged() {
  		return {
  			equipment: Equipt.stores.EquipmentStore.getEquipment()
  		}

  	}

	render() {

		let EquipmentShowView = Equipt.views.EquipmentShowView; 

		return (
			<EquipmentShowView  { ...this.state } />
		)
	}

}