// ===============================
// SELECTED / CHANGES RENTAL DATES
// ===============================

function selectedRentalDates(startDate, endDate) {
	dispatchAction(Constants.CHANGED_RENTAL_DATES, {
		startDate: startDate,
		endDate: endDate
	});
};

// ==================================
// SELECTED TIME TO PICK UP EQUIPMENT
// ==================================

function selectedPickUpTime(time) {
	dispatchAction(Constants.CHANGED_PICKUP_TIME, {
		time: time	
	});
}

// ===============================
// RENTED EQUIPMENT
// ===============================

function rentEquipment(equipmentId, params) {
	API.post(`/equipments/${equipmentId}/rentals`, params).then(
	function(data) {
		dispatchAction(Constants.RENTED_EQUIPMENT, {
			rental: data
		});
	});
};



