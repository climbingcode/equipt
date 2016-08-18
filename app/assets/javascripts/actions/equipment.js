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
		}
	);
		
};

// =================
// CREATE EQUIPMENT
// =================

Equipt.actions.addEquiptment = function(equipment) {

	Equipt.API.post(`/equipments`, equipment).then(
		(data) => {
			dispatchAction(Constants.EQUIPMENT_CREATE, data);
		},
		(err) => {
			console.log('Error Creating Equipment');
		}
	);

};