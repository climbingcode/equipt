class OwnersIndexController extends MainComponent {

	constructor(props) {
		super(props);
		this.stores = [EquipmentStore];
		this.state = this.dataChanged();
	}

	componentWillMount() {
		getOwnersEquipment();
	}

	dataChanged() {
		return {
			equipment: EquipmentStore.getEquipment()
		}
	}

	render() {
		return (
			<OwnersIndexView equipment={this.state.equipment}/>
		)
	}

}
