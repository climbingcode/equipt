Equipt.controllers.LoginFormView = class LoginFormView extends Equipt.helpers.FormHelper {

	constructor(props) {
		super(props);
	}

	submit(e) {
		e.preventDefault();
		this.serializeForm();
		createSession(this.formData);
	}

	render() {

		let FaceBookController = Equipt.controllers.FaceBookController;

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