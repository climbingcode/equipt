function newSession(userData) {

	API.post('/session', userData).then(
		(user) => {
			AppDispatcher.handleViewAction({
				type: 'UPDATE_CURRENT_USER',
				newUser: user
			});
		}, 
		(err) => {
			console.log(err.responseText);
		}
	);

}