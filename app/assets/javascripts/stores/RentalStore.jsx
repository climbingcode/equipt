var	_rentalDates 	 = null;
var _rentalTime  	 = null;
var _rentedEquipment = null;

const RentalStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

	getRentalDates() {
        return _rentalDates;
	},

	getRentalTime() {
		return _rentalTime;
	},

	getRental() {
		return _rentedEquipment;
	},

	setRentalDates(start, end) {
		_rentalDates = {start: start, end: end};
	},

	setRentalTime(time) {
		_rentalTime = time;
	},

	setRental(rental) {
		_rentedEquipment = rental;
	}

});

AppDispatcher.register(function(action) {
  
  	var {type, data} = action.payload;
  	
  	switch(type) {
		case Constants.CHANGED_RENTAL_DATES:
			RentalStore.setRentalDates(data.startDate, data.endDate);
            RentalStore.emitChange();
		break; 
		case Constants.CHANGED_PICKUP_TIME:
			RentalStore.setRentalTime(data.time);
			RentalStore.emitChange();
		break;
		case Constants.RENTED_EQUIPMENT:
			RentalStore.setRental(data.rental);
			RentalStore.emitChange();
		break;
	}

});