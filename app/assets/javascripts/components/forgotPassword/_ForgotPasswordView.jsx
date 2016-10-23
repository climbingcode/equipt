Equipt.views.ForgotPasswordView = class ForgotPasswordView extends React.Component {

	submit(e) {
		e.preventDefault();
		let email = this.refs.email.value;
		let emailConfirmation = this.refs.emailConfirmation.value;
		Equipt.actions.forgotPassword({
			email: email,
			email_confirmation: emailConfirmation
		});
	}

	render() {
		return (
			<div className="password-reset-request-form col-sm-12">
				<form onSubmit={ this.submit.bind(this) }>
					<input 	ref="email"  
							type="text"
							className="form-control"
							placeholder="please enter you email here"/>
					<br/>
					<input 	ref="emailConfirmation"  
							type="text"
							className="form-control"
							placeholder="Please enter you email confirmation here"/>
					<br/>
					<button type="submit"
							className="col-sm-12 btn btn-success">Get Password</button>
				</form>
			</div>
		)
	}

}