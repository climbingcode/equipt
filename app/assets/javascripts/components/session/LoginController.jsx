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

  		const LoginFormView = Equipt.views.LoginFormView;
  		const ForgotPasswordView = Equipt.views.ForgotPasswordView;

		return (
			<div>
				<LoginFormView 	errors={this.state.errors} />
				<Link to="forgotPassword">Forgot Password</Link>
			</div>
		)
	}

}