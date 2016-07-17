class LoginController extends FormComponent {

	constructor(props) {
		super(props);
		this.store = ErrorsStore;
		this.state = {
			errors: ErrorsStore.getErrors()
		}
	}

	submit(formData) {
		// submit functionality handled in FormComponent.submit
		createSession(formData);
	}

  	dataChanged() {
  		return {
  			errors: ErrorsStore.getErrors()
  		}
  	}

  	render() {
		return (
			<LoginForm errors={this.state.errors}/>
		)
	}



}