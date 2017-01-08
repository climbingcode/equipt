Equipt.stores.RentalStore = Object.assign({}, EventEmitter.prototype, StoreSettings, {

    rentals: [],
    rental: {},
    createdRental: false,

    setRentals(rentals) {
    	this.rentals = rentals;
    },

    getRentals() {
        return this.rentals;
    },

    setDates(dates) {
        this.rental.pickup_date = dates.pickup_date;
        this.rental.dropoff_date = dates.dropoff_date;
    },

    setTimes(times) {
        this.rental.times = times;
    },

    getRental() {
        return this.rental;
    },

    rentalConfirmed(rental) {
        this.rentals.push(rental);
        this.rental     = rental;
        this.createdRental = true;
    },

    clearRental() {
        this.rental = {};
        this.createdRental = false;
    },

    clearRentals() {
        this.rentals = [];
    },

    hasCreatedRental() {
        return this.createdRental;
    }

});

AppDispatcher.register(function(action) {
  
  	var {type, data} = action.payload;

  	const RentalStore = Equipt.stores.RentalStore;
  	
  	switch(type) {
  		case Constants.RENTAL_INDEX:
  			RentalStore.setRentals(data);
  		break;
        case Constants.CHANGED_RENTAL_DATES:
            RentalStore.setDates(data);
        break;
        case Constants.CHANGED_PICKUP_TIME:
            RentalStore.setTimes(data);
        break;
        case Constants.RENTED_EQUIPMENT:
            RentalStore.rentalConfirmed(data);
        break;
        case Constants.DELETE_RENTAL:

        break;
	}

    RentalStore.emitChange();

});