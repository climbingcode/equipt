// =================
// GET ALL EQUIPMENT
// =================

function getEquipment(query) {

	var params = query ? serialize({query: query}) : '';

	API.get(`/equipments?${params}`).then(
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

function showEquipment(id) {

		API.get(`/equipments/${id}`).then(
		(data) => {
			dispatchAction(Constants.EQUIPMENT_SHOW, data);
		},
		(err) => {
			console.log('Error Getting Equipment');
		}
	);
		
}