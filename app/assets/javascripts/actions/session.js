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