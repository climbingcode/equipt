function newCurrentUser(newUser) {

	API.get('/session/new').then(
		(newUser) => {
			AppDispatcher.handleViewAction({
				type: 'UPDATE_CURRENT_USER',
				newUser: newUser
			});
		}, 
		(err) => {
			console.log(err.responseText);
		}
	);

}