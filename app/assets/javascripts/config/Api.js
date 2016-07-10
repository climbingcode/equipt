const API = {

	get: function(url) {
		return new Promise((resolve, reject) => {
			this.call(url, 'GET', data).then((res) => {
				this.handleRequest(res, resolve, reject);
			});
		});
	},

	post: function(url, data) {
		return new Promise((resolve, reject) => {
			this.call(url, 'POST', data).then((res) => {
				this.handleRequest(res, resolve, reject);
			});
		});
	},

	put: function(url, data) {
		return new Promise((resolve, reject) => {
			this.call(url, 'PUT', data).then((res) => {
				this.handleRequest(res, resolve, reject);
			});
		});
	},

	delete: function(url) {
		return new Promise((resolve, reject) => {
			this.call(url, 'DELETE', data)((res) => {
				this.handleRequest(res, resolve, reject);
			});
		});
	},

	call: function(url, method, data) {
		return new Promise((resolve) => {
			
			var ajaxObj = {
				url: url,
				type: 'POST',
				dataType: 'json',
  				contentType: 'application/json'
			};

			if (data) ajaxObj.data = JSON.stringify(data);

			$.ajax(ajaxObj).complete((res) => {
				resolve(res);
			});

		});
	},

	handleRequest: function(res, resolve, reject) {
		if (res.status === 404 || res.status === 400) {
			reject(res);
		} else {
			if (res.errors) {
				hasErrors(formatKeys(res.errors, 'CAMEL_CASE'));
			} else {
				resolve(formatKeys(res, 'CAMEL_CASE'));
			}
		}
	}

};

// Convert data to under case before send

function getHeader() {
	if (window.FB && window.FB.getAccessToken()) {
		return window.FB.getAccessToken();
	} else {
		return '123';
	}
};

$.ajaxSetup({
	beforeSend: (res, xhr) => {
		// set Auth Header
		res.setRequestHeader('Authenticate', getHeader());
	}
});

