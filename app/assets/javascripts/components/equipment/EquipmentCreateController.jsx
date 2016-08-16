Equipt.controllers.EquipmentCreateController = class extends Equipt.controllers.MainController {

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.EquipmentStore]
	}

	render() {

		let EquipmentCreateView = Equipt.views.EquipmentCreateView;

		return (
			<EquipmentCreateView/>
		)
		
	}

}