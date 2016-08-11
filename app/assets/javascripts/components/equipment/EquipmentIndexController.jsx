class EquipmentIndexController extends MainComponent {

	constructor(props) {
		super(props);
		this.stores = [EquipmentStore];
		this.state  = {
			equipments: EquipmentStore.getEquipments()
		}
	}

	componentWillMount() {
		getEquipment();
	}

  	dataChanged() {
  		return {
  			equipments: EquipmentStore.getEquipments()
  		};
  	}

	render() {
		return (
			<div className="equiptment-wrapper">
				<RouteHandler/>
				<EquipmentIndexView equipments={this.state.equipments}/>
			</div>
		)
	}

}