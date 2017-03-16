Equipt.actions.getOwnersEquipment = function() {

	Equipt.API.get('/owner/equipments').then(
		(data) => {
			dispatchAction(Constants.OWNERS_EQUIPMENT_INDEX, data);
		},
		(err) => {
			console.log('Error Getting Owners Equipment');
		}
	);

};

// =================
// DELETE EQUIPMENT
// =================

Equipt.actions.deleteOwnersEquipment = function(id) {

	Equipt.API.delete(`/owner/equipments/${id}`).then(
		(data) => {
			dispatchAction(Constants.OWNERS_EQUIPMENT_DELETE, data);
		},
		(err) => {
			console.log('Error Deleting Equipment');
		}
	);

};