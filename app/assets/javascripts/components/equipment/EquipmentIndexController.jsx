class EquipmentIndexController extends MainComponent {

	constructor(props) {
		super(props);
		this.store = EquipmentStore;
		this.state = {
			equipment: EquipmentStore.getEquipments()
		}
	}

	componentWillMount() {
		getEquipment();
	}

  	dataChanged() {
  		return {
  			equipment: EquipmentStore.getEquipments()
  		};
  	}

	render() {
		return (
			<div className="equiptment-wrapper">
				<RouteHandler/>
				<EquipmentIndexView equipment={this.state.equipment}/>
			</div>
		)
	}

}