import React from 'react';

import { NavController } from 'components/layout/NavController';
import { AjaxLoader } from 'components/ajaxLoader/AjaxLoader';
import { MainController } from 'components/MainController';

import loaderActions from 'actions/LoaderActions';
import authActions from 'actions/authActions';
import AuthStore from 'stores/AuthStore';

export class Equipt extends MainController {

  	getState = function() {
		return {
			currentUser: AuthStore.getCurrentUser() || null
		}
	}

	constructor(props) {
		super(props);
		this.stores = [ AuthStore ];
		this.state = this.getState();

		// Get Current User if any and redirect to equipment index
		authActions.getSession(() => {
			this.props.history.push({
				pathname: '/equipment'
			})
		});
	}

	dataChanged() {
		return this.getState();
	}

	render() {

		return (
			<main>
				<NavController { ...this.state }/>
				<AjaxLoader/>
				{ this.props.children }
			</main>
		)
	}

};