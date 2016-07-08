const API = {

	get: function(url) {
		return new Promise(function(resolve, reject) {
			$.get(url)
			.complete(function(res) {
				if (res.status === 404 || res.status === 404) {
					reject(res);
				} else {
					resolve(JSON.parse(res.text));
				}
			});
		});
	}

};