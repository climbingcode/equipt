var	_rentalDates 	 = null;
var _rentalTime  	 = null;
var _rentedEquipment = null;
var _owner			 = null;

Equipt.stores.RentalStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

	getRentalDates() {
        return _rentalDates;
	},

	getRentalTime() {
		return _rentalTime;
	},

	getRental() {
		return _rentedEquipment;
	},

	getOwner() {
		return _owner
	},

	setRentalDates(start, end) {
		_rentalDates = {start: start, end: end};
	},

	setRentalTime(time) {
		_rentalTime = time;
	},

	setRental(rental) {
		_rentedEquipment = rental;
	},

	setOwner(owner) {
		_owner = owner;
	},

	clearRental() {
		_rentedEquipment = null;
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
			RentalStore.setOwner(data.owner);
			RentalStore.emitChange();
		break;
	}

});