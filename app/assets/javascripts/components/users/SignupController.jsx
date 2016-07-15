class SignupController extends FormComponent {

	constructor(props) {
		super(props);
		this.store = ErrorsStore;
		this.state = {
			errors: ErrorsStore.getErrors()
		}
	}

	submit(formData) {
		// submit functionality handled in mixins/FormComponent.submit
		createUser({user: formData});
	}

  	dataChanged() {
  		return {
  			errors: ErrorsStore.getErrors()
  		};
  	}

	render() {
		return (
			<SignupForm errors={this.state.errors}/>
		)
	}
	
}