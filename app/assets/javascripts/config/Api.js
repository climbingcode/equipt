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

	post: function(url, data, options) {
		return new Promise((resolve, reject) => {
			this.send(url, 'POST', data, options)
			.then((res) => {
				resolve(res);
			}, (err) => {
				reject(err);
			});
		});
	},

	put: function(url, data, options) {
		return new Promise((resolve, reject) => {
			this.send(url, 'PUT', data, options)
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

	send: function(url, method, data, options = {}) {

		return new Promise((resolve, reject) => {

			let ApiKey = Equipt.stores.AuthStore.getApiKey();
		
			var ajaxObj = {
				url: Equipt.API.path + url,
				type: method,
				contentType: options.contentType ? options.contentType : 'application/json',
 				cache: false,
  				processData: false,
				data: options.data ? options.data : JSON.stringify(data),
				beforeSend: (request) => {
	            	request.setRequestHeader('AUTHORIZATION', ApiKey);
	        	}
			};

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

