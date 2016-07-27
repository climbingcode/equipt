class EquipmentShowController extends MainComponent {

	constructor(props) {
		super(props);
		this.stores = [EquipmentStore, RentalStore];
		this.state = {
			equipment: EquipmentStore.getEquipment(),
  			rentalDates: RentalStore.getRentalDates(),
  			rentalTime: RentalStore.getRentalTime()
		}
	}

	componentWillMount() {
		let id = this.context.router.getCurrentParams().id;
		showEquipment(id);
	}

  	dataChanged() {
  		return {
  			equipment: EquipmentStore.getEquipment(),
  			rentalDates: RentalStore.getRentalDates(),
  			rentalTime: RentalStore.getRentalTime()
  		}
  	}

	render() {
		return (
			<EquipmentShowView  equipment={this.state.equipment}
								rentalDates={this.state.rentalDates}
								rentalTimes={this.state.rentalTime}
			/>
		)
	}

}

EquipmentShowController.contextTypes = {
	router: React.PropTypes.func.isRequired
};