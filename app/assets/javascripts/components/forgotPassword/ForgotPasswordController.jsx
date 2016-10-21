Equipt.controllers.ForgotPasswordController = class ForgotPasswordController extends Equipt.controllers.MainController {

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.AuthStore];
	}

	render() {

		const ForgotPasswordView = Equipt.views.ForgotPasswordView;

		return (
			<ForgotPasswordView/>
		)
	}

}