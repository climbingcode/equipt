// =================
// GET ALL EQUIPMENT
// =================

Equipt.actions.getEquipment = function(query) {

	var params = query ? serialize({query: query}) : '';

	Equipt.API.get(`/equipments?${params}`).then(
		(data) => {
			dispatchAction(Constants.EQUIPMENT_INDEX, data);
		},
		(err) => {
			console.log('Error Getting Equipment');
		}
	);

};

// =================
// GET ONE EQUIPMENT
// =================

Equipt.actions.showEquipment = function(id) {

	Equipt.API.get(`/equipments/${id}`).then(
	(data) => {
		dispatchAction(Constants.EQUIPMENT_SHOW, data);
	},
	(err) => {
		console.log('Error Getting Equipment');
	});

};

// =================
// CREATE EQUIPMENT
// =================

Equipt.actions.createEquiptment = function(equipment, callback) {

	// settings for content type
	let formData = new FormData();
	let xhr = new XMLHttpRequest();
	let apiKey = Equipt.stores.AuthStore.getApiKey();

	for (key in equipment) {
		value = equipment[key] ? equipment[key] : '';
		formData.append(`equipment[${key}]`, value);
	}

	for (key in images) {
		formData.append('equipment[images][]', images[key]);
	};

	let options = {
		contentType: '',
		data: formData
	}

	xhr.open("POST", `/api/equipments`, true);
	xhr.setRequestHeader('AUTHORIZATION', apiKey);
	xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
    xhr.send(formData);

    if (callback) callback();

};

// =================
// UPDATE EQUIPMENT
// =================

Equipt.actions.updateEquiptment = function(equipment = {}, images = {}, id, callback) {

	// settings for content type
	let formData = new FormData();
	let xhr = new XMLHttpRequest();
	let apiKey = Equipt.stores.AuthStore.getApiKey();

	for (key in equipment) {
		value = equipment[key] ? equipment[key] : '';
		formData.append(`equipment[${key}]`, value);
	}

	for (key in images) {
		formData.append('equipment[images][]', images[key]);
	};

	let options = {
		contentType: '',
		data: formData
	}

	xhr.open("PUT", `/api/equipments/${ id }`, true);
	xhr.setRequestHeader('AUTHORIZATION', apiKey);
	xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
    xhr.send(formData);

    if (callback) callback();

};

// =================
// DELETE EQUIPMENT
// =================

Equipt.actions.deleteEquipment = function(id) {

	Equipt.API.delete(`/equipments/${id}`).then(
		(data) => {
			dispatchAction(Constants.EQUIPMENT_DELETE, data.equipment);
		},
		(err) => {
			console.log('Error Deleting Equipment');
		}
	);

};