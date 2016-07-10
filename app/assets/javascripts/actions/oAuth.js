function faceBookLogin() {
	API.post('auth/facebook/callback')
	.then(function(user) {
		AppDispatcher.handleViewAction({
			type: Constants.NEW_SESSION,
			newUser: user
		});
	});
};