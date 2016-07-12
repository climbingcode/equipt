function createUser(userData) {
	
	API.post('/users', userData).then(
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

};