class Login extends FormComponent {

	constructor(props) {
		super(props);
	}

	submit(formData) {
		// submit functionality handled in FormComponent.submit
		newSession(formData);
	}

	render() {
		return (
			<form onSubmit={this.submit.bind(this)}>
				<label htmlFor="email">Email</label>
				<input type="text" ref="email" className="form-control"/>
				{ this.renderError.call(this, 'email') }
				<br/>
				<label htmlFor="password">Password</label>
				<input type="password" ref="password" className="form-control"/>
				{ this.renderError.call(this, 'password') }
				<br/>
				<label htmlFor="password">Password</label>
				<input type="password" ref="passwordConfirmation" className="form-control"/>
				{ this.renderError.call(this, 'passwordConfirmation') }
				<br/>
				<button className="btn btn-success pull-right" type="submit">Login</button>
			</form>
		)
	}

}