// ===============
// NEW SESSION
// ===============

Equipt.actions.createSession = function(userData) {
	
	Equipt.API.post('/session', userData).then(
		(data) => {
			dispatchAction(Constants.NEW_SESSION, data);
		}, 
		(err) => {
			console.log(err.responseText);
		}
	);

};

// ===============
// END SESSION
// ===============

Equipt.actions.endSession = function() {
	dispatchAction(Constants.END_SESSION, null);
};

// =====================
// IF SESSION, GET USER
// =====================

Equipt.actions.appInit = function() {

	Equipt.API.get('/users/' + Equipt.stores.AuthStore.getUserId()).then(
		(data) => {
			dispatchAction(Constants.NEW_SESSION, data);
		}, 
		(err) => {
			console.log(err.responseText);
		}
	);

};

// ======================
// IF 500 UNAUTH RESPONSE
// ======================

Equipt.actions.unauthorizedUser = function() {
	dispatchAction(Constants.END_SESSION, null);
};

// ======================
// FACEBOOK LOGIN
// ======================

Equipt.actions.facebookStatusChanged = function(isLoggedIn) {
	// Must be sent to exact path below to work
	if (isLoggedIn) {	
		$.post('/auth/facebook/callback').then(function(data) {
			dispatchAction(Constants.FACEBOOK_STATUS_CHANGED, {
				isLoggedIn: true,
				user: data.user,
				api_key: data.api_key
			});
		});
	} else {
		dispatchAction(Constants.FACEBOOK_STATUS_CHANGED, {
			isLoggedIn: false,
			user: null
		});
	}
};
