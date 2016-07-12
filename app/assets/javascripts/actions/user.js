function createUser(userData) {
	
	API.post('/users', userData).then(
		(user) => {
			AppDispatcher.handleViewAction({
				type: Constants.NEW_SESSION,
				user: user
			});
			hasErrors(null);
		}, 
		(err) => {
			console.log(err.responseText);
		}
	);

};