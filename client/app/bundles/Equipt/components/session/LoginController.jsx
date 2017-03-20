import React from 'react';

import { Link } from 'react-router-dom';
import { MainController } from 'MainController';
import { LoginFormView } from './LoginFormView';

import ErrorsStore from 'stores/ErrorsStore';

export class LoginController extends MainController {

	constructor(props) {
		super(props);
		this.stores = [ ErrorsStore ];
		this.state = {
			errors: ErrorsStore.getErrors()
		}
	}

  	dataChanged() {
  		return {
  			errors: ErrorsStore.getErrors()
  		}
  	}

  	render() {

		return (
			<div>
				<LoginFormView errors={this.state.errors} facebookId={ this.props.facebookID }/>
				<Link to="/forgot">Forgot Password</Link>
			</div>
		)
	}

};