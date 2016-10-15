// =================
// GET ALL EQUIPMENT
// =================

Equipt.actions.getEquipment = function(query) {

	var params = query ? serialize({query: query}) : '';

	dispatchAction(Constants.SEARCH_EQUIPMENT, query);

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
// SHOW EQUIPMENT
// =================

Equipt.actions.showEquipment = function(id) {

	Equipt.API.get(`/equipments/${id}`).then(
	(data) => {
		dispatchAction(Constants.EQUIPMENT_SHOW, data);
		dispatchAction(Constants.RENTAL_INDEX, data.rentals);
	},
	(err) => {
		console.log('Error Getting Equipment');
	});

};

// =================
// CREATE EQUIPMENT
// =================

Equipt.actions.createEquiptment = function(equipment = {}, images = {}, callback) {

	let formData = new FormData();

	for (key in equipment) {
		value = equipment[key] ? equipment[key] : '';
		formData.append(`equipment[${key}]`, value);
	}

	for (key in images) {
		formData.append('equipment[images][]', images[key]);
	};

	let options = {
		isMultipart: true,
		data: formData
	}

    Equipt.API.post(`/equipments`, formData, options).then(
	(data) => {
		dispatchAction(Constants.EQUIPMENT_CREATE, data);
		if (callback) callback();
	},
	(err) => {
		console.log('Error Creating Equipment');
	});

};

// =================
// UPDATE EQUIPMENT
// =================

Equipt.actions.updateEquiptment = function(equipment = {}, images = {}, id, callback) {

	let formData = new FormData();

	for (key in equipment) {
		value = equipment[key] ? equipment[key] : '';
		formData.append(`equipment[${key}]`, value);
	}

	for (key in images) {
		formData.append('equipment[images][]', images[key]);
	};

	let options = {
		isMultipart: true,
		data: formData
	}

	Equipt.API.put(`/equipments/${ id }`, formData, options).then(
	(data) => {
		dispatchAction(Constants.EQUIPMENT_UPDATE, data);
		if (callback) callback();
	},
	(err) => {
		console.log('Error Updating Equipment');
	});

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