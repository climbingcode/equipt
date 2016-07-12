var _currentUser = null;

const AuthStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

	currentUser() {
        return _currentUser;
	},

	authenticated() {
		return this.getSession() && AuthStore.getSession().length;
	},

	setSession(apiKey) {
		sessionStorage['equiptSession'] = JSON.stringify(apiKey);
	},

	getSession() {
		return sessionStorage['equiptSession'];
	},

	deleteSession() {
		sessionStorage['equiptSession'] = '';
		_currentUser = null;
	},

	getApiKey() {
		return this.getSession() && JSON.parse(AuthStore.getSession()).access_token;
	},

	getUserId() {
		return this.getSession() && JSON.parse(AuthStore.getSession()).id;
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
			_currentUser = null;
			AuthStore.deleteSession();
			AuthStore.emitChange();
		break;
	}

});