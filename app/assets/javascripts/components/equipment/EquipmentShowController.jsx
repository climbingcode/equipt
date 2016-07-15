class EquipmentShowController extends MainComponent {

	constructor(props) {
		super(props);
		this.store = EquipmentStore;
		this.state = {
			equipment: EquipmentStore.getEquipment()
		}
	}

	componentWillMount() {
		let id = this.context.router.getCurrentParams().id;
		showEquipment(id);
	}

  	dataChanged() {
  		return {
  			equipment: EquipmentStore.getEquipment()
  		}
  	}

	render() {
		return (
			<EquipmentShowView equipment={this.state.equipment}/>
		)
	}

}

EquipmentShowController.contextTypes = {
	router: React.PropTypes.func.isRequired
};