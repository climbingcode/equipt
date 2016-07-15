function createUser(userData) {
	
	API.post('/users', userData).then(
		(data) => {
			dispatchAction(Constants.NEW_SESSION, data);
			hasErrors(null);
		}, 
		(err) => {
			console.log(err.responseText);
		}
	);

};
