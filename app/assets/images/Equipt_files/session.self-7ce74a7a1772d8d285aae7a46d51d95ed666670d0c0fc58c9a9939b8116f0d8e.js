// ===============
// NEW SESSION
// ===============

function createSession(userData) {

	API.post('/session', userData).then(
		(data) => {
			dispatchAction(Constants.NEW_SESSION, data);
			hasErrors(null);
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
// IF SESSSION, GET USER
// =====================

function appInit() {

	API.get('/users/' + AuthStore.getUserId()).then(
		(data) => {
			dispatchAction(Constants.NEW_SESSION, data);
			hasErrors(null);
		}, 
		(err) => {
			console.log(err.responseText);
		}
	);

}
