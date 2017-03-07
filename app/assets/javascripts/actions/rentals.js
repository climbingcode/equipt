// ===============================
// GET ALL RENTALS
// ===============================

Equipt.actions.getRentals = function() {
	Equipt.API.get('/rentals')
	.then(data => {
			dispatchAction( Constants.RENTAL_INDEX, data.rentals );
			dispatchAction( Constants.OWNERS_RENTAL_INDEX, data.rented );
		}, error => {
			console.log(error);
		}
	);
};


// ===============================
// DELETE RENTAL
// ===============================

Equipt.actions.deleteRental = (equipmentId, rentalId, canConfirm) => {

	let url;
	let action;

	if (canConfirm) {
		url = `/owner/equipments/${equipmentId}/rentals/${rentalId}`;	
		action = Constants.OWNERS_RENTAL_DELETE;
	} else {
		url = `/equipments/${equipmentId}/rentals/${rentalId}`;	
		action = Constants.RENTAL_DELETE;
	}

	Equipt.API.delete(url)
	.then(rental => {
			dispatchAction(action, rental);
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

// ================
// RENTAL CONFIRMED
// ================

Equipt.actions.confirmRental = function(equipmentId, rentalId, rental) {

	Equipt.API.put(`/owner/equipments/${equipmentId}/rentals/${rentalId}`, rental).then(
		rental => {
			dispatchAction(Constants.RENTAL_UPDATED, rental);
		},
		() => {
			console.log('rental failed to update');
		}
	);

}

// ===============================
// RENTED EQUIPMENT
// ===============================

Equipt.actions.rentEquipment = function(equipmentId, params) {

	Equipt.API.post(`/equipments/${equipmentId}/rentals`, params)
	.then(rental => {
		if (rental.id) {
			dispatchAction(Constants.RENTED_EQUIPMENT, rental);
		}
	});
	
};



