Equipt.controllers.OwnersShowController = class OwnersShowController extends Equipt.controllers.MainController {

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.ErrorsStore];
	}

	render() {

		const OwnersShowView = Equipt.views.OwnersShowView;
		const userId = Equipt.stores.AuthStore.getUserId();

		return (
			<OwnersShowView userId={userId}/>
		)
	}

}