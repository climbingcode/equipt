import React from 'react';

import { MainController } from 'MainController';
import { FaceBookController } from 'components/oauth/FaceBookController';
import { SignupFormView } from 'components/users/SignupFormView';

import ErrorsStore from 'stores/ErrorsStore';

export class SignupController extends MainController {

	constructor(props) {
		super(props);
		this.stores = [ ErrorsStore ];
		this.state = {
			errors: ErrorsStore.getErrors()
		}
	}

	submit(user) {
		Equipt.actions.createUser({user: user});
	}

  	dataChanged() {
  		return {
  			errors: ErrorsStore.getErrors()
  		};
  	}

	render() {
		return (
			<div className="signup-wrapper">
				<FaceBookController/>
				<SignupFormView {...this.props} submit={this.submit.bind(this)} />
			</div>
		)
	}
	
}