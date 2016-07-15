function faceBookLogin() {
	API.post('/auth/facebook/callback')
	.then(function(user) {
		dispatchAction(Constants.NEW_SESSION, user);
	});
};