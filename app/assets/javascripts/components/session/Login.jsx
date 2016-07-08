class Login extends React.Component {

	constructor(props) {
		super(props);
	}

	login(e) {
		e.preventDefault();
		
		newSession({
			email: this.refs.email.value,
			password: this.refs.password.value,
			passwordConfirmation: this.refs.passwordConfirmation.value
		});
	}

	render() {
		return (
			<form onSubmit={this.login.bind(this)}>
				<label htmlFor="email">Email</label>
				<input type="text" ref="email" className="form-control"/>
				<br/>
				<label htmlFor="password">Password</label>
				<input type="password" ref="password" className="form-control"/>
				<br/>
				<label htmlFor="password">Password</label>
				<input type="password" ref="passwordConfirmation" className="form-control"/>
				<br/>
				<button className="btn btn-success pull-right" type="submit">Login</button>
			</form>
		)
	}

}