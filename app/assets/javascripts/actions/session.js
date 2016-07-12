// ===============
// NEW SESSION
// ===============

function createSession(userData) {

	API.post('/session', userData).then(
		(data) => {
			AppDispatcher.handleViewAction({
				type: Constants.NEW_SESSION,
				data: data
			});
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

	AppDispatcher.handleViewAction({
		type: Constants.END_SESSION,
		user: null
	});

}

// =====================
// IF SESSSION, GET USER
// =====================

function appInit() {

	API.get('/users/' + AuthStore.getUserId()).then(
		(data) => {
			AppDispatcher.handleViewAction({
				type: Constants.NEW_SESSION,
				data: data
			});
			hasErrors(null);
		}, 
		(err) => {
			console.log(err.responseText);
		}
	);

}