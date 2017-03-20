import React from 'react';

import { FormComponent } from 'components/helpers/FormComponent';
import { FaceBookController } from 'components/oauth/FaceBookController';

import AuthActions from 'actions/AuthActions';

export class LoginFormView extends FormComponent {

	constructor(props) {
		super(props);
	}

	submit(e) {
		e.preventDefault();
		this.serializeForm();
		AuthActions.createSession(this.formData);
	}

	render() {

		return (
			<div className="login-wrapper">
				<FaceBookController facebookID={ this.props.facebookID }/>
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