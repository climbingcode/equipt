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



