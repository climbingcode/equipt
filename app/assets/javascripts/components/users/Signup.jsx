class Signup extends FormComponent {

	constructor(props) {
		super(props);
	}

	submit(formData) {
		// submit functionality handled in mixins/FormComponent.submit
		createUser({user: formData});
	}

	render() {
		return (
			<div className="signup-wrapper">
				<FaceBookOauth/>
				<form onSubmit={this.submit.bind(this)}>
					<label htmlFor="firstname">First Name</label>
					<input className="form-control" ref="firstname"/>
					{ this.renderError.call(this, 'firstname') }
					<br/>
					<label htmlFor="lastname">Last Name</label>
					<input className="form-control" ref="lastname"/>
					{ this.renderError.call(this, 'lastname') }
					<br/>
					<label htmlFor="username">Username</label>
					<input className="form-control" ref="username"/>
					{ this.renderError.call(this, 'username') }
					<br/>
					<label htmlFor="email">Email</label>
					<input className="form-control" ref="email"/>
					{ this.renderError.call(this, 'email') }
					<br/>
					<label htmlFor="email-confirmation">Email Confirmation</label>
					<input className="form-control" ref="emailConfirmation"/>
					{ this.renderError.call(this, 'emailConfirmation') }
					<br/>
					<label htmlFor="password">Password</label>
					<input type="password" ref="password" className="form-control"/>
					{ this.renderError.call(this, 'password') }
					<br/>
					<label htmlFor="password">Password</label>
					<input type="password" ref="passwordConfirmation" className="form-control"/>
					{ this.renderError.call(this, 'passwordConfirmation') }
					<br/>
					<button className="btn btn-success pull-right" type="submit">Sign up</button>
				</form>
			</div>
		)
	}
	
}