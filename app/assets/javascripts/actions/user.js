Equipt.actions.createUser = function(userData) {
	
	Equipt.API.post('/users', userData).then(
		(data) => {
			dispatchAction(Constants.NEW_SESSION, data);
		}, 
		(err) => {
			console.log(err.responseText);
		}
	);

};