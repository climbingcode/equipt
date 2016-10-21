Equipt.controllers.ForgotPasswordController = class ForgotPasswordController extends Equipt.controllers.MainController {

	getState = function() {
		return {
			forgotPassword: Equipt.stores.AuthStore.hasForgotPassword()	
		}
	}

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.AuthStore];
		this.state  = this.getState();
	}

	dataChanged() {
		return this.getState();
	}

	render() {

		const ForgotPasswordView = Equipt.views.ForgotPasswordView;
		const ForgotPasswordResetView = Equipt.views.ForgotPasswordResetView;

		return (<ForgotPasswordView/>);
		
	}

}