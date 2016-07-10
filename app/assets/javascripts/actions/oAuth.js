function faceBookLogin() {
	API.post('auth/facebook', FB.getAuthResponse())
	.then(function(user) {
		AppDispatcher.handleViewAction({
			type: Constants.NEW_SESSION,
			newUser: user
		});
	});
};