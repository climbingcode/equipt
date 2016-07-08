const API = {

	get: function(url) {
		return new Promise((resolve, reject) => {
			$.get(url).complete((res) => {
				this.handleRequest(res, resolve, reject);
			});
		});
	},

	post: function(url, data) {
		return new Promise((resolve, reject) => {
			$.post(url, data).complete((res) => {
				this.handleRequest(res, resolve, reject);
			});
		});
	},

	put: function(url, data) {
		return new Promise((resolve, reject) => {
			$.ajax({
				url: url,
				data: data,
				type: 'PUT'
			}).complete((res) => {
				this.handleRequest(res, resolve, reject);
			});
		});
	},

	delete: function(url) {
		return new Promise((resolve, reject) => {
			$.ajax({
				url: url,
				type: 'DELETE'
			}).complete((res) => {
				this.handleRequest(res, resolve, reject);
			});
		});
	},

	handleRequest: function(res, resolve, reject) {
		if (res.status === 404 || res.status === 400) {
			reject(res);
		} else {
			resolve(formatKeys(res.responseJSON, 'CAMEL_CASE'));
		}
	}

};

// Convert data to under case before send

$.ajaxSetup({
	beforeSend: (res, xhr) => {
		return xhr.data = xhr.data.toUnderCase();
	}
});

