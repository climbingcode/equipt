

Equipt.stores.AuthStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

	_currentUser: null,
	_facebookLogin: false,

	currentUser() {
        return this._currentUser || {};
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
		this.setCurrentUser(null);
	},

	getApiKey() {
		return this.getSession();
	},

	getUserId() {
		return this.currentUser().id;
	},

	isFacebookLogin() {
		return this._facebookLogin;
	},

	setFacebookLogin(status) {
		this._facebookLogin = status;
	},

	setCurrentUser(user) {
		this._currentUser = user;	
	}

});

AppDispatcher.register(function(action) {
  
  	var {type, data} = action.payload;

  	let AuthStore = Equipt.stores.AuthStore;
  	
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
		case Constants.FACEBOOK_STATUS_CHANGED:
			if (data.isLoggedIn) {
				AuthStore.setFacebookLogin(true);
				AuthStore.setCurrentUser(data);
				AuthStore.setSession(data);
			} else {
				AuthStore.setFacebookLogin(false);
				AuthStore.deleteSession();
			} 
			AuthStore.emitChange();
		break;
	}

});