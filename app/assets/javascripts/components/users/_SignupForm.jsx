Equipt.views.SignupFormView = class SignupForm extends Equipt.helpers.FormHelper {

	constructor(props) {
		super(props);
	}

	submit(e) {
		e.preventDefault();
		this.serializeForm();
		this.props.submit(this.formData);
	}

	render() {

		let FaceBookController = Equipt.controllers.FaceBookController;
		let currentUser = this.props.currentUser
		
		return (			
			<form onSubmit={this.submit.bind(this)}>
				<label htmlFor="firstname">First Name</label>
				<input 	className="form-control" 
						ref="firstname"
						value={ currentUser &&  currentUser.firstname }/>
				{ this.renderError.call(this, 'firstname') }
				<br/>
				<label htmlFor="lastname">Last Name</label>
				<input 	className="form-control" 
						ref="lastname"
						value={ currentUser &&  currentUser.lastname }/>
				{ this.renderError.call(this, 'lastname') }
				<br/>
				<label htmlFor="username">Username</label>
				<input 	className="form-control" 
						ref="username"
						value={ currentUser &&  currentUser.username }/>
				{ this.renderError.call(this, 'username') }
				<br/>
				<label htmlFor="email">Email</label>
				<input 	className="form-control" 
						ref="email"
						value={currentUser &&  currentUser.email}/>
				{ this.renderError.call(this, 'email') }
				<br/>
				<label htmlFor="email-confirmation">Email Confirmation</label>
				<input className="form-control" ref="email_confirmation"/>
				{ this.renderError.call(this, 'email_confirmation') }
				<br/>
				<label htmlFor="password">Password</label>
				<input type="password" ref="password" className="form-control"/>
				{ this.renderError.call(this, 'password') }
				<br/>
				<label htmlFor="password">Password Confirmation</label>
				<input type="password" ref="password_confirmation" className="form-control"/>
				{ this.renderError.call(this, 'password_confirmation') }
				<br/>
				<button className="btn btn-success pull-right" type="submit">Sign up</button>
			</form>
		)
	}

}