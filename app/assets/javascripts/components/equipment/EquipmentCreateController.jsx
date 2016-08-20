Equipt.controllers.EquipmentCreateController = class extends Equipt.controllers.MainController {

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.EquipmentStore, Equipt.stores.ErrorsStore]
		this.state = {
			errors: Equipt.stores.ErrorsStore.getErrors()
		}
	}

	dataChanged() {
		return {
			errors: Equipt.stores.ErrorsStore.getErrors()
		}
	}

	render() {

		let EquipmentCreateView = Equipt.views.EquipmentCreateView;

		let userId = Equipt.stores.AuthStore.getUserId();

		return (
			<EquipmentCreateView userId={userId} errors={this.state.errors}/>
		)
		
	}

}