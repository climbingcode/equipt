const CREATE_USER = 'CREATE_USER';

function createUser(userData) {
	
	API.post('/users', userData).then(
		(user) => {
			AppDispatcher.handleViewAction({
				type: CREATE_USER,
				newUser: user
			});
		}, 
		(err) => {
			console.log(err.responseText);
		}
	);

};