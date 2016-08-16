Equipt.API = {

	path: '/api',

	get: function(url) {
		return new Promise((resolve, reject) => {
			this.send(url, 'GET')
			.then((res) => {
				resolve(res);
			}, (err) => {
				reject(err);
			});
		});
	},

	post: function(url, data) {
		return new Promise((resolve, reject) => {
			this.send(url, 'POST', data)
			.then((res) => {
				resolve(res);
			}, (err) => {
				reject(err);
			});
		});
	},

	put: function(url, data) {
		return new Promise((resolve, reject) => {
			this.send(url, 'PUT', data).then((res) => {
				
			});
		});
	},

	delete: function(url) {
		return new Promise((resolve, reject) => {
			this.send(url, 'DELETE')((res) => {
				
			});
		});
	},

	send: function(url, method, data) {

		return new Promise((resolve, reject) => {

			let ApiKey = Equipt.stores.AuthStore.getApiKey();
		
			var ajaxObj = {
				url: Equipt.API.path + url,
				type: method,
				dataType: 'json',
				contentType: 'application/json',
				beforeSend: (request) => {
	            	request.setRequestHeader('AUTHORIZATION', ApiKey);
	        	}
			};

			if (data) ajaxObj.data = JSON.stringify(data);

			$.ajax(ajaxObj)
			.success((res) => {
				if (res.errors) hasErrors(res.errors);
				else resolve(res);
			})
			.error((err) => {
				if (err.status === 500 || err.status === 401) {
					unauthorizedUser();
				}
				reject(err);
			});

		});

	}

}

