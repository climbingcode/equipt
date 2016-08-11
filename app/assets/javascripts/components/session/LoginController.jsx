Equipt.controllers.LoginController = class LoginController extends Equipt.controllers.MainController {

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
  		}
  	}

  	render() {

  		let LoginFormView = Equipt.controllers.LoginFormView;

		return (
			<LoginFormView 	errors={this.state.errors} />
		)
	}

}