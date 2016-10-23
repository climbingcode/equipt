Equipt.views.ForgotPasswordResetView = class ForgotPasswordResetView extends React.Component {

	static contextTypes = {
		router: React.PropTypes.func.isRequired
	}

	submit(e) {
		e.preventDefault();
		let password = this.refs.password.value;
		let passwordConfirmation = this.refs.passwordConfirmation.value;
		let passwordResetToken = this.context.router.getCurrentParams().passwordResetToken
		Equipt.actions.ResetPassword({
			password: password,
			password_confirmation: passwordConfirmation,
			reset_token: passwordResetToken
		}, () => {
			this.context.router.transitionTo('login');
		});
	}

	render() {
		return (
			<div className="password-reset-form">
				<form onSubmit={ this.submit.bind(this) }>
					<input 	ref="password" 
							className="form-control"
							type="password"
							placeholder="Enter your new password here"/>
					<br/>
					<input  ref="passwordConfirmation"
					     	className="form-control"
							type="password"
							placeholder="Confirm your password here"/>
					<br/>							
					<button type="submit"
							className="btn btn-success">
							Reset Password
					</button>
				</form>
			</div>
		)
	}

}