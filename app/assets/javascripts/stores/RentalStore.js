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
    },

    removeRental(rentalId, callback) {

        for (var i = 0; i < this.rentals.length; i++) {
            let rental = this.rentals[i];
            if ( rental.id === rentalId ) {
                this.rentals.splice(i, 1);
                callback();
                break;
            }
        };

    }

});

AppDispatcher.register(function(action) {
  
  	var {type, data} = action.payload;

  	const RentalStore = Equipt.stores.RentalStore;
  	
  	switch(type) {
  		case Constants.RENTAL_INDEX:
  			RentalStore.setRentals(data);
            RentalStore.emitChange();
  		break;
        case Constants.CHANGED_RENTAL_DATES:
            RentalStore.setDates(data);
            RentalStore.emitChange();
        break;
        case Constants.CHANGED_PICKUP_TIME:
            RentalStore.setTimes(data);
            RentalStore.emitChange();
        break;
        case Constants.RENTED_EQUIPMENT:
            RentalStore.rentalConfirmed(data);
            RentalStore.emitChange();
        break;
        case Constants.RENTAL_DESTROY:
            RentalStore.removeRental(data.id, () => {
                RentalStore.emitChange();
            });
        break;
    }
});