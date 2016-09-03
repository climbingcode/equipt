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
			this.send(url, 'PUT', data)
			.then((res) => {
				resolve(res);
			}, (err) => {
				reject(err);
			});
		});
	},

	delete: function(url) {
		return new Promise((resolve, reject) => {
			this.send(url, 'DELETE')
			.then((res) => {
				resolve(res);
			}, (err) => {
				reject(err);
			});
		});
	},

	send: function(url, method, data) {

		return new Promise((resolve, reject) => {

			let ApiKey = Equipt.stores.AuthStore.getApiKey();
		
			var ajaxObj = {
				url: Equipt.API.path + url,
				type: method,
				contentType: false,
 				cache: false,
  				processData: false,
				dataType: 'json',
				beforeSend: (request) => {
	            	request.setRequestHeader('AUTHORIZATION', ApiKey);
	        	}
			};

			if (data) ajaxObj.data = data;

			$.ajax(ajaxObj)
			.success((res) => {
				if (res.errors) return hasErrors(res.errors);
				else if (res.notice) hasNotice(res.notice)
				resolve(res);
			})
			.error((err) => {
				if (err.status === 500 || err.status === 401) {
					Equipt.actions.unauthorizedUser();
				}
				reject(err);
			});

		});

	}

}

