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
			<div className="col-sm-12">
				<form onSubmit={ this.submit.bind(this) }>
					<input 	ref="email"  
							type="text"
							className="form-control"
							placeholder="please enter you email here"/>
					<input 	ref="emailConfirmation"  
							type="text"
							className="form-control"
							placeholder="Please enter you email confirmation here"/>
					<button type="submit"
							className="col-sm-12 btn btn-success">Get Password</button>
				</form>
			</div>
		)
	}

}