class EquipmentShowController extends MainComponent {

	constructor(props) {
		super(props);
		this.stores = [EquipmentStore, RentalStore];
		this.state = {
			equipment: {},
			rentalDates: {}
		}
	}

	componentWillMount() {
		let id = this.context.router.getCurrentParams().id;
		showEquipment(id);
	}

  	dataChanged() {
  		return {
  			equipment: EquipmentStore.getEquipment(),
  			rentalDates: RentalStore.getRentalDates()
  		}
  	}

	render() {
		return (
			<EquipmentShowView  equipment={this.state.equipment}
								rentalDates={this.state.rentalDates}
			/>
		)
	}

}

EquipmentShowController.contextTypes = {
	router: React.PropTypes.func.isRequired
};