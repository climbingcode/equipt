// ===============================
// GET ALL RENTALS
// ===============================

Equipt.actions.getRentals = function() {
	Equipt.API.get('/rentals')
	.then(
		(rentals) => {
			dispatchAction(Constants.RENTAL_INDEX, rentals);
		},
		(error) => {
			console.log(error);
		}
	);
};


// ===============================
// DELETE RENTAL
// ===============================

Equipt.actions.deleteRental = (equipmentId, rentalId) => {

	Equipt.API.delete(`/equipments/${equipmentId}/rentals/${rentalId}`)
	.then(
		(rental) => {
			dispatchAction(Constants.RENTAL_DELETE, rental);
		},
		() => {
			console.log('rental failed to delete');
		}
	)

};

// ===============================
// SELECTED / CHANGES RENTAL DATES
// ===============================

Equipt.actions.selectedRentalDates = function(dates) {
	dispatchAction(Constants.CHANGED_RENTAL_DATES, dates);
};

// ==================================
// SELECTED TIME TO PICK UP EQUIPMENT
// ==================================

Equipt.actions.selectedPickUpTime = function(time) {
	dispatchAction(Constants.CHANGED_PICKUP_TIME, time);
}

// ===============================
// RENTED EQUIPMENT
// ===============================

Equipt.actions.rentEquipment = function(equipmentId, params) {

	Equipt.API.post(`/equipments/${equipmentId}/rentals`, params).then(
	function(rental) {
		dispatchAction(Constants.RENTED_EQUIPMENT, rental);
	});
	
};



