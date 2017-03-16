import React from 'react';

import { RouteHandler } from 'react-router';
import { MainController } from './MainController';

import AuthStore from 'stores/AuthStore';
import loaderActions from 'actions/loader';

import { Nav } from 'components/layout/Nav';
import { NoticeController } from 'components/notice/NoticeController';
import { AjaxLoader } from 'components/ajaxLoader/AjaxLoader';

class Equipt extends MainController {

	getState = function() {
		return {
			currentUser: AuthStore.currentUser() || {}
		}
	}

	constructor(props) {
		super(props);
		this.stores = [ AuthStore ];
		this.state = this.getState();
	}

	componentDidMount() {
		if (AuthStore.authenticated()) Equipt.actions.appInit();	
	}

	changePath() {

		var path = this.context.router.getCurrentPathname();

		// Change with onEnter in router on release of 
		// newer version of react-rails-router 1.0

		setTimeout(() => {
			if (AuthStore.authenticated() 
				&& ((path.indexOf('/equipment') > -1) || (path.indexOf('/owner') > -1)) ) {	
				this.context.router.transitionTo(path);
			} else if (AuthStore.authenticated()) {
				this.context.router.transitionTo(Constants.links.equipmentIndex);
			} else if (path.indexOf('/login') === -1) {			
				this.context.router.transitionTo(Constants.links.login);
			}
		});

	}

  	dataChanged() {
  		this.setState(this.getState());
		this.changePath.call(this);
  	}

	render() {

		return (
			<content>
				<AjaxLoader/>
				<Nav currentUser={this.state.currentUser}/>
				<div className="main-content col-xs-10 col-xs-offset-1">
					<NoticeController/>
					<RouteHandler currentUser={this.state.currentUser}/>
				</div>
			</content>
		)
	}
	
}

export { Equipt };