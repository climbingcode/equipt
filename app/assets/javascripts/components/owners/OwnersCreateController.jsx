class OwnersCreateController extends Equipt.controllers.MainController {

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.EquipmentStore]
	}

	render() {
		return (
			<div>Create Equipment</div>
		)
	}

}