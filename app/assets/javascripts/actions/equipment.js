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

	Equipt.API.post(`/equipments`, equipment).then(
		(data) => {
			dispatchAction(Constants.EQUIPMENT_CREATE, data.equipment);
			if (callback) callback();
		},
		(err) => {
			console.log('Error Creating Equipment');
		}
	);

};

// =================
// UPDATE EQUIPMENT
// =================

Equipt.actions.updateEquiptment = function(equipment, id, callback) {

	Equipt.API.put(`/equipments/${ id }`, equipment).then(
		(data) => {
			dispatchAction(Constants.EQUIPMENT_UPDATE, data);
			if (callback) callback();
		},
		(err) => {
			console.log('Error Updating Equipment');
		}
	);

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