import Constants from 'Constants';
import AppDispatcher from 'dispatcher';
import StoreSettings from './StoreSettings';

const AuthStore = Object.assign({}, StoreSettings, {

	_currentUser: null,

	currentUser() {
        return this._currentUser || {};
	},

	setCurrentUser(user) {
		this._currentUser = user;	
	},

	authenticated() {
		return this.getSession().length > 0;
	},

	setSession(user) {
		try {
			if (user && user.api_key && user.api_key.length) {
				localStorage['equiptSession'] = user.api_key;	
			} 
		} catch(err) {
			this.deleteSession();
		}
	},

	getSession() {
		return localStorage['equiptSession'] || '';
	},

	deleteSession() {
		localStorage['equiptSession'] = '';
		localStorage['oauthToken'] = '';
		this.setCurrentUser(null);
	},

	setOauthToken(user) {
		try {
			localStorage['oauthToken'] = user.oauth_token || '';
		} catch(err) {
			this.deleteSession();
		}
	},

	getOauthToken() {
		return localStorage['oauthToken'];
	},

	getApiKey() {
		return this.getSession();
	},

	getUserId() {
		return this.currentUser().id;
	}

});

AppDispatcher.register(function(action) {
  
  	var {type, data} = action.payload;
  	
 	switch(type) {
		case Constants.NEW_SESSION:
			AuthStore.setCurrentUser(data);
			AuthStore.setSession(data);
			AuthStore.emitChange();
		break;
		case Constants.END_SESSION:
			AuthStore.deleteSession();
			AuthStore.emitChange();
		break;
		case Constants.UPDATE_USER:
			AuthStore.setCurrentUser(data);
			AuthStore.emitChange();
		break;
		case Constants.FACEBOOK_LOGIN:
			AuthStore.setCurrentUser(data);
			AuthStore.setSession(data);
			AuthStore.setOauthToken(data);
			AuthStore.emitChange();
		break;
	}

});

export default AuthStore;