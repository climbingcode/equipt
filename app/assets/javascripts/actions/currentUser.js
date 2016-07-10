function newSession(userData) {

	API.post('/session', userData).then(
		(user) => {
			AppDispatcher.handleViewAction({
				type: Constants.NEW_SESSION,
				newUser: user
			});
			hasErrors(null);
		}, 
		(err) => {
			console.log(err.responseText);
		}
	);

}