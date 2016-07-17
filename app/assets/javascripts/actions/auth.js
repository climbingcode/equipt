// ===============
// NEW SESSION
// ===============

function createSession(userData) {

	API.post('/session', userData).then(
		(data) => {
			dispatchAction(Constants.NEW_SESSION, data);
		}, 
		(err) => {
			console.log(err.responseText);
		}
	);

}

// ===============
// END SESSION
// ===============

function endSession() {
	dispatchAction(Constants.END_SESSION, null);
}

// =====================
// IF SESSION, GET USER
// =====================

function appInit() {

	API.get('/users/' + AuthStore.getUserId()).then(
		(data) => {
			dispatchAction(Constants.NEW_SESSION, data);
		}, 
		(err) => {
			console.log(err.responseText);
		}
	);

}

// ======================
// IF 500 UNAUTH RESPONSE
// ======================

function unauthorizedUser() {
	dispatchAction(Constants.END_SESSION, null);
}

// ======================
// FACEBOOK LOGIN
// ======================

function facebookStatusChanged(isLoggedIn) {
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
