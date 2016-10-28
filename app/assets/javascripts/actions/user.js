Equipt.actions.createUser = function(user) {
	
	Equipt.API.post('/users', user).then(
		(data) => {
			dispatchAction(Constants.NEW_SESSION, data);
		}, 
		(err) => {
			console.log(err.responseText);
		}
	);

};

Equipt.actions.updateUser = function(user, callback) {

	let userId = Equipt.stores.AuthStore.getUserId();

	Equipt.API.put(`/users/${userId}`, user).then(
		(data) => {
			dispatchAction(Constants.UPDATE_USER, data);
			if (callback) callback();
		}, 
		(err) => {
			console.log(err.responseText);
		}
	)

};

// ======================
// FORGOT PASSWORD
// ======================

Equipt.actions.forgotPassword = function(email) {
	Equipt.API.post('/password_resets', email);
};

Equipt.actions.ResetPassword = function(resetData, callback) {
	Equipt.API.put(`/password_resets/${resetData.reset_token}`, resetData).then(() => {
		callback();
	});
}
