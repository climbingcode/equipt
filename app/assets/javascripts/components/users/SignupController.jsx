Equipt.controllers.SignupController = class SignupController extends Equipt.controllers.MainController {

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.ErrorsStore];
		this.state = {
			errors: Equipt.stores.ErrorsStore.getErrors()
		}
	}

  	dataChanged() {
  		return {
  			errors: Equipt.stores.ErrorsStore.getErrors()
  		};
  	}

	render() {

		let SignupFormView = Equipt.views.SignupFormView;

		return (
			<SignupFormView errors={this.state.errors} />
		)
	}
	
}