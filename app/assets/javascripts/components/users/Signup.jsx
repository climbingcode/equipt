class Signup extends FormComponent {

	constructor(props) {
		super(props);
	}

	submit(formData) {
		createUser({user: formData});
	}

	render() {
		return (
			<form onSubmit={this.submit.bind(this)}>
				<label htmlFor="firstname">First Name</label>
				<input className="form-control" ref="firstname"/>
				<br/>
				<label htmlFor="lastname">Last Name</label>
				<input className="form-control" ref="lastname"/>
				<br/>
				<label htmlFor="email">Email</label>
				<input className="form-control" ref="email"/>
				<br/>
				<label htmlFor="username">Username</label>
				<input className="form-control" ref="username"/>
				<br/>
				<label htmlFor="password">Password</label>
				<input type="password" ref="password" className="form-control"/>
				<br/>
				<label htmlFor="password">Password</label>
				<input type="password" ref="passwordConfirmation" className="form-control"/>
				<br/>
				<button className="btn btn-success pull-right" type="submit">Sign up</button>
			</form>
		)
	}
	
}