var _currentUser = null;
var _facebookLogin = false;

const AuthStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

	currentUser() {
        return _currentUser;
	},

	authenticated() {
		return this.getSession() && AuthStore.getSession().length;
	},

	setSession(apiKey) {
		localStorage['equiptSession'] = JSON.stringify(apiKey);
	},

	getSession() {
		return localStorage['equiptSession'];
	},

	deleteSession() {
		localStorage['equiptSession'] = '';
		_currentUser = null;
	},

	getApiKey() {
		return this.getSession() && JSON.parse(AuthStore.getSession()).access_token;
	},

	getUserId() {
		return this.getSession() && JSON.parse(AuthStore.getSession()).id;
	},

	isFacebookLogin() {
		return _facebookLogin;
	}

});

AppDispatcher.register(function(action) {
  
  	var {type, data} = action.payload;
  	
 	switch(type) {
		case Constants.NEW_SESSION:
			_currentUser = data.user;
			AuthStore.setSession(data.api_key);
			AuthStore.emitChange();
		break;
		case Constants.END_SESSION:
			AuthStore.deleteSession();
			AuthStore.emitChange();
		break;
		case Constants.FACEBOOK_STATUS_CHANGED:
			if (data.isLoggedIn) {
				_facebookLogin 	= true;
				_currentUser 	= data.user;
				AuthStore.setSession(data.api_key);
			} else {
				_facebookLogin = false;
				AuthStore.deleteSession();
			} 
			AuthStore.emitChange();
		break;
	}

});