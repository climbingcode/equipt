const NEW_SESSION = 'UPDATE_CURRENT_USER';

function newSession(userData) {

	API.post('/session', userData).then(
		(user) => {
			AppDispatcher.handleViewAction({
				type: NEW_SESSION,
				newUser: user
			});
		}, 
		(err) => {
			console.log(err.responseText);
		}
	);

}