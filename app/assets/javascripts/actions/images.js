Equipt.actions.updateImages = function(className, instanceId, images, callback) {

	let formData = new FormData();
	let xhr = new XMLHttpRequest();

	let apiKey = Equipt.stores.AuthStore.getApiKey();

	for (key in images) {
		formData.append('images[]', images[key]);
	};

	formData.append('className', className);
	formData.append('instanceId', instanceId);

	xhr.open("POST", "/api/images", true);
	xhr.setRequestHeader('AUTHORIZATION', apiKey);
	xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
    xhr.send(formData);

	callback && callback();

};