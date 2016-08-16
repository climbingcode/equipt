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

}

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
		
}