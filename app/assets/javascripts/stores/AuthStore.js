var _currentUser = null;
var _facebookLogin = false;

Equipt.stores.AuthStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

	currentUser() {
        return _currentUser;
	},

	authenticated() {
		return this.getSession() && this.getSession().length;
	},

	setSession(apiKey) {
		try {
			localStorage['equiptSession'] = JSON.stringify(apiKey);
		} catch(err) {
			this.deleteSession();
		}
	},

	getSession() {
		return localStorage['equiptSession'];
	},

	deleteSession() {
		localStorage['equiptSession'] = '';
		_currentUser = null;
	},

	getApiKey() {
		try {
			return this.getSession() && JSON.parse(this.getSession()).access_token;
		} catch(err) {
			this.deleteSession();
		}
	},

	getUserId() {
		try {
			return this.getSession() && JSON.parse(this.getSession()).user_id;
		} catch(err) {
			this.deleteSession();
		}
	},

	isFacebookLogin() {
		return _facebookLogin;
	}

});

AppDispatcher.register(function(action) {
  
  	var {type, data} = action.payload;

  	let AuthStore = Equipt.stores.AuthStore;
  	
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