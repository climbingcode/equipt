// ===============================
// SELECTED / CHANGES RENTAL DATES
// ===============================

Equipt.actions.selectedRentalDates = function(startDate, endDate) {
	dispatchAction(Constants.CHANGED_RENTAL_DATES, {
		startDate: startDate,
		endDate: endDate
	});
};

// ==================================
// SELECTED TIME TO PICK UP EQUIPMENT
// ==================================

Equipt.actions.selectedPickUpTime = function(time) {
	dispatchAction(Constants.CHANGED_PICKUP_TIME, {
		time: time	
	});
}

// ===============================
// RENTED EQUIPMENT
// ===============================

Equipt.actions.rentEquipment = function(equipmentId, params) {

	Equipt.API.post(`/equipments/${equipmentId}/rentals`, params).then(
	function(data) {
		dispatchAction(Constants.RENTED_EQUIPMENT, {
			rental: data
		});
	});
	
};



