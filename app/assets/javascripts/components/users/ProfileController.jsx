Equipt.controllers.ProfileController = class ProfileController extends Equipt.controllers.MainController {

	getState = function() {
		return {
			errors: Equipt.stores.ErrorsStore.getErrors(),
			currentUser: Equipt.stores.AuthStore.currentUser()
		}
	}

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.ErrorsStore, Equipt.stores.AuthStore];
		this.state  = this.getState();
	}

	submit(user) {
		let oAuthToken = Equipt.stores.AuthStore.getOauthToken();
		if (oAuthToken.length) user.oauth_token = oAuthToken; 
		Equipt.actions.updateUser({user: user});
	}

  	dataChanged() {
  		return this.getState();
  	}

	render() {

		let SignupForm = Equipt.views.SignupFormView;

		return (
			<SignupForm { ...this.props } 
						submit={this.submit.bind(this)}/>
		)

	}
	
}