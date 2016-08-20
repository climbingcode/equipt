Equipt.controllers.SignupController = class SignupController extends Equipt.controllers.MainController {

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.ErrorsStore];
		this.state = {
			errors: Equipt.stores.ErrorsStore.getErrors()
		}
	}

	submit(user) {
		Equipt.actions.createUser({user: user});
	}

  	dataChanged() {
  		return {
  			errors: Equipt.stores.ErrorsStore.getErrors()
  		};
  	}

	render() {

		let SignupFormView = Equipt.views.SignupFormView;
		let FaceBookController = Equipt.controllers.FaceBookController;

		return (
			<div className="signup-wrapper">
				<FaceBookController/>
				<SignupFormView {...this.props} submit={this.submit.bind(this)} />
			</div>
		)
	}
	
}