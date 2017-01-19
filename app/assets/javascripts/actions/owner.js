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


// Delete rental of equipment owned by current user

Equipt.actions.deleteOwnerRental = function(equipmentId, rentalId) {

	Equipt.API.delete(`/owner/equipments/${equipmentId}/rentals/${rentalId}`).then(
		(data) => {
			dispatchAction(Constants.OWNERS_DELETES_RENTAL, data);
		},
		(err) => {
			console.log('Error Getting Owners Equipment');
		}
	);

};