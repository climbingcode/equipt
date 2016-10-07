Equipt.controllers.ProfileController = class ProfileController extends Equipt.controllers.MainController {

	constructor(props) {
		super(props);
		this.stores = [Equipt.stores.ErrorsStore, Equipt.stores.AuthStore];
		this.state = {
			errors: Equipt.stores.ErrorsStore.getErrors(),
			currentUser: Equipt.stores.AuthStore.currentUser()
		}
	}

	submit(user) {
		Equipt.actions.updateUser({user: user});
	}

  	dataChanged() {
  		return {
  			errors: Equipt.stores.ErrorsStore.getErrors(),
  			currentUser: Equipt.stores.AuthStore.currentUser()
  		};
  	}

	render() {

		let SignupForm = Equipt.views.SignupFormView;

		return (
			<SignupForm { ...this.props } 
						submit={this.submit.bind(this)}/>
		)

	}
	
}