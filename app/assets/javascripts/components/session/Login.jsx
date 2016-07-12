class Login extends FormComponent {

	constructor(props) {
		super(props);
	}

	submit(formData) {
		// submit functionality handled in FormComponent.submit
		createSession(formData);
	}

	render() {
		return (
			<div className="login-wrapper">
				<FaceBookOauth/>
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
					<input type="password" ref="password_confirmation" className="form-control"/>
					{ this.renderError.call(this, 'password_confirmation') }
					<br/>
					<button className="btn btn-success pull-right" type="submit">Login</button>
				</form>
			</div>
		)
	}

}