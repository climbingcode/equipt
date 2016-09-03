Equipt.controllers.EquipmentCreateController = class extends Equipt.controllers.MainController {

	static contextTypes = {
		router: React.PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.ErrorsStore]
		this.state = {
			errors: Equipt.stores.ErrorsStore.getErrors(),
			currentUser: Equipt.stores.AuthStore.currentUser()
		}
	}

	createEquipment(equipment) {
		Equipt.actions.createEquiptment(equipment, () => {
			this.context.router.transitionTo('ownersIndex', {
				userId: this.props.currentUser.id
			});
		});
	}

	dataChanged() {
		return {
			errors: Equipt.stores.ErrorsStore.getErrors(),
			currentUser: Equipt.stores.AuthStore.currentUser()
		}
	}

	render() {

		let EquipmentCreateView = Equipt.views.EquipmentCreateView;

		let userId = Equipt.stores.AuthStore.getUserId();

		return (
			<EquipmentCreateView userId={userId} 
								 errors={this.state.errors}
								 submittedForm={this.createEquipment.bind(this)}/>
		)
		
	}

}