class LoginForm extends LoginController {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="login-wrapper">
				<FaceBookController/>
				<form onSubmit={this.submit.bind(this)}>
					<label htmlFor="email">Email</label>
					<input type="text" ref="email" className="form-control"/>
					{ this.renderError.call(this, 'email') }
					<br/>
					<label htmlFor="password">Password</label>
					<input type="password" ref="password" className="form-control"/>
					{ this.renderError.call(this, 'password') }
					<br/>
					<button className="btn btn-success pull-right" type="submit">Login</button>
				</form>
			</div>
		)
	}

}