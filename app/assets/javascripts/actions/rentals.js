// ===============================
// GET ALL RENTALS
// ===============================

Equipt.actions.getRentals = function() {
	Equipt.API.get('/rentals')
	.then(
		(data) => {
			dispatchAction( Constants.RENTAL_INDEX, data.rentals );
			dispatchAction( Constants.OWNERS_RENTAL_INDEX, data.rented );
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
			dispatchAction(Constants.RENTAL_DESTROY, rental);
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

	Equipt.API.put(`/equipments/${equipmentId}/rentals/${rentalId}`, rental).then(
		function(rental) {
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

	Equipt.API.post(`/equipments/${equipmentId}/rentals`, params).then(
	function(rental) {
		if (rental.id) {
			dispatchAction(Constants.RENTED_EQUIPMENT, rental);
		}
	});
	
};



