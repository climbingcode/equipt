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

Equipt.actions.updateUser = function(user) {

	let userId = Equipt.stores.AuthStore.getUserId();

	Equipt.API.put(`/users/${userId}`, user).then(
		(data) => {
			dispatchAction(Constants.UPDATE_USER, data);
		}, 
		(err) => {
			console.log(err.responseText);
		}
	)

};
