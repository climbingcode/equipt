var	_rentalDates = {};

const RentalStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

	getRentalDates() {
        return _rentalDates;
	},

	setRentalDates(start, end) {
		_rentalDates = {start: start, end: end};
	}

});

AppDispatcher.register(function(action) {
  
  	var {type, data} = action.payload;
  	
  	switch(type) {
		case Constants.CHANGED_RENTAL_DATES:
			RentalStore.setRentalDates(data.startDate, data.endDate);
            RentalStore.emitChange();
		break; 
	}

});